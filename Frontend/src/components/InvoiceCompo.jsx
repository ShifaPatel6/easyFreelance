import { RegularButton } from '../CommonCss/commoncss'
import useWorkedItemStore from '../Store/WorkedItemStore'
import { invoiceStyles as s } from '../CommonCss/InvoicePdfStyle'
import CopyInvoice from '../DocumentConvert/CopyInvoice'
import { useState,useEffect } from 'react'
import CopyToast from './CopyToast'
import { getToken } from '../Helper/tokenHelper'
import useLoading from '../Hooks/LoadingHook'
import generatePDF from '../DocumentConvert/generatePDF'

const InvoiceCompo = ({ userDetail, clientDetail }) => {
  const items      = useWorkedItemStore((state) => state.items)
  const getSubTotal = useWorkedItemStore((state) => state.getSubTotal)
  const getGst      = useWorkedItemStore((state) => state.getGst)
  const getTotal    = useWorkedItemStore((state) => state.getTotal)
  const { isLoading, startLoading, stopLoading } = useLoading()
  const [invoiceNumber, setInvoiceNumber] = useState(null)

    const [result , setResult] = useState();
  

  const[error , setError] = useState()

  const [showCopy ,setShowCopy] =useState(false)

  const showToast = async () =>{
    
    await CopyInvoice()
    
    setShowCopy(true)
    setTimeout(()=>setShowCopy(false),2000)

  }
  useEffect(() => {
  const fetchInvoiceNumber = async () => {
    const response = await getToken({
      url: 'http://localhost:5000/Invoice/generate-number',
      options: { method: 'GET' }
    })
    const data = await response.json()
    setInvoiceNumber(data.invoice_number)
  }

  fetchInvoiceNumber()
}, [])
  
  const handleInvoiceSave = async () => {
  startLoading()
  
  try {
    // Step 1 — DB mein save karo
    const response = await getToken({
      url: 'http://localhost:5000/Invoice/save',
      options: {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          clientName: clientDetail.name, 
          dueDate: clientDetail.dueDate,
          total: getTotal(),
          invoiceNumber: invoiceNumber // ← already fetch kiya hua
        })
      }
    })

    const data = await response.json()

    if (!data.success) {
      throw new Error(data.message)
    }

  } catch {
    // DB fail hua — but PDF toh download hogi!
    setError("Invoice save failed!")
    setTimeout(() => setError(null), 6000)
  }

  // Step 2 — PDF hamesha download hogi
  await generatePDF(clientDetail)
  stopLoading()
}

  return (
    <>
      <div id="invoice-preview" style={s.wrapper}>
        <div style={s.container}>

          {/* Header */}
          <div style={s.header}>
            <div>
              <div style={s.senderName}>{userDetail.name || 'Your Name'}</div>
              <div style={s.senderEmail}>{userDetail.email || 'your@email.com'}</div>
            </div>
            <div style={s.invoiceTitleBlock}>
              <div style={s.invoiceTitle}>Invoice</div>
              <div style={s.invoiceNumber}>{invoiceNumber || "01"}</div>
            </div>
          </div>

          {/* Billed To + Dates */}
          <div style={s.metaRow}>
            <div>
              <div style={s.sectionLabel}>Billed to</div>
              <div style={s.clientName}>{clientDetail.name || 'Client Name'}</div>
              <div style={s.clientCompany}>{clientDetail.company || 'Company'}</div>
            </div>
            <div>
              <div style={s.dateLabel}>Invoice date</div>
              <div>{clientDetail.invoiceDate || '—'}</div>
              <div style={s.dueDateLabel}>Due date</div>
              <div>{clientDetail.dueDate || '—'}</div>
            </div>
          </div>

          {/* Items Table */}
          <table style={s.table}>
            <thead>
              <tr style={s.tableHeadRow}>
                <th style={{ ...s.thBase, ...s.thLeft }}>Description</th>
                <th style={{ ...s.thBase, ...s.thCenter }}>Qty</th>
                <th style={{ ...s.thBase, ...s.thRight }}>Rate</th>
                <th style={{ ...s.thBase, ...s.thRight }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} style={s.tableBodyRow}>
                  <td style={s.tdBase}>{item.description || '—'}</td>
                  <td style={s.tdCenter}>{item.quantity || '—'}</td>
                  <td style={s.tdRight}>₹{Number(item.rate).toLocaleString('en-IN')}</td>
                  <td style={s.tdRight}>₹{Number(item.amount).toLocaleString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div style={s.totalsBlock}>
            <div style={s.totalRow}>
              <span>Subtotal</span>
              <span>₹{getSubTotal().toLocaleString('en-IN')}</span>
            </div>
            <div style={s.totalRow}>
              <span>GST (18%)</span>
              <span>₹{getGst().toLocaleString('en-IN')}</span>
            </div>
            <div style={s.grandTotalRow}>
              <span>Total due</span>
              <span style={s.grandTotalAmount}>₹{getTotal().toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Payment Details */}
          <div style={s.paymentSection}>
            <div style={s.paymentLabel}>Payment details</div>
            <div style={s.paymentDetail}>{userDetail.bankDetail || 'UPI / Bank details'}</div>
            <div>Payment within 14 days. Thank you for the project!</div>
          </div>

        </div>
      </div>

      <div className='flex gap-4 mt-4'>
        <RegularButton className='h-auto lg:h-10 px-6 w-auto 'onClick={handleInvoiceSave}  disabled={!userDetail.name} >
          Download Pdf
        </RegularButton>

        <RegularButton className='h-auto lg:h-10 px-6 w-auto' onClick={showToast} disabled={!userDetail.name}>
          Copy invoice text
        </RegularButton>
        <CopyToast show={showCopy}/>
    
      </div>
    </>
  )
}

export default InvoiceCompo