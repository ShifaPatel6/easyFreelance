import { RegularButton } from '../CommonCss/commoncss'
import useWorkedItemStore from '../Store/WorkedItemStore'
import InvoicePdf from '../DocumentConvert/generatePDF'
import { invoiceStyles as s } from '../CommonCss/InvoicePdfStyle'
import CopyInvoice from '../DocumentConvert/CopyInvoice'
import { useState } from 'react'
import CopyToast from './CopyToast'

const InvoiceCompo = ({ userDetail, clientDetail }) => {
  const items      = useWorkedItemStore((state) => state.items)
  const getSubTotal = useWorkedItemStore((state) => state.getSubTotal)
  const getGst      = useWorkedItemStore((state) => state.getGst)
  const getTotal    = useWorkedItemStore((state) => state.getTotal)


  const [showCopy ,setShowCopy] =useState(false)

  const showToast = async () =>{
    
    await CopyInvoice()
    
    setShowCopy(true)
    setTimeout(()=>setShowCopy(false),2000)

  }
  const handleDownload =()=>{
    InvoicePdf(clientDetail)
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
              <div style={s.invoiceNumber}>#INV-2026-001</div>
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
        <RegularButton className='h-auto lg:h-10 px-6 w-auto 'onClick={handleDownload}  disabled={!userDetail.name} >
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