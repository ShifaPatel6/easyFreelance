import React from 'react'
import {RegularButton} from '../CommonCss/commoncss' 
import useInvoiceStore from '../Store/WorkedItemStore'
import InvoicePdf from '../DocumentConvert/generatePDF'

 const InvoiceCompo = ({userDetail,clientDetail}) => {
  const items = useInvoiceStore((state)=>state.items)
 const getSubTotal = useInvoiceStore((state) => state.getSubTotal)
const getGst      = useInvoiceStore((state) => state.getGst)
const getTotal    = useInvoiceStore((state) => state.getTotal)
  
  return (
  <>
<div
  id="invoice-preview"
  style={{
    backgroundColor: '#ffffff',
    padding: '20px',
    width: '700px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#1a1a1a',
   
  }}
>
  <div style={{  border:'2px solid black' ,padding:'20px'}}>

 
  {/* Header */}
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px', }}>
    <div>
      <div style={{ fontSize: '18px', fontWeight: '600' }}>
        {userDetail.name || 'Your Name'}
      </div>
      <div style={{ color: '#666', marginTop: '4px' }}>
        {userDetail.email || 'your@email.com'}
      </div>
    </div>
    <div style={{ textAlign: 'right' }}>
      <div style={{ fontSize: '22px', fontWeight: '600', color: '#534AB7' }}>
        Invoice
      </div>
      <div style={{ color: '#888', fontSize: '12px', marginTop: '4px' }}>
        #INV-2026-001
      </div>
    </div>
  </div>

  {/* Billed to + Dates */}
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px' }}>
    <div>
      <div style={{ fontSize: '11px', color: '#888', marginBottom: '6px', textTransform: 'uppercase' }}>
        Billed to
      </div>
      <div style={{ fontWeight: '500' }}>{clientDetail.name || 'Client Name'}</div>
      <div style={{ color: '#666' }}>{clientDetail.company || 'Company'}</div>
    </div>
    <div>
      <div style={{ fontSize: '11px', color: '#888', marginBottom: '6px', textTransform: 'uppercase' }}>
        Invoice date
      </div>
      <div>{clientDetail.invoiceDate || '—'}</div>
      <div style={{ fontSize: '11px', color: '#888', marginTop: '10px', marginBottom: '6px', textTransform: 'uppercase' }}>
        Due date
      </div>
      <div>{clientDetail.DueDate || '—'}</div>
    </div>
  </div>

  {/* Items Table */}
  <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
    <thead>
      <tr style={{ borderBottom: '1px solid #eee' }}>
        <th style={{ textAlign: 'left', padding: '8px 0', fontSize: '11px', color: '#888', textTransform: 'uppercase' }}>Description</th>
        <th style={{ textAlign: 'center', padding: '8px 0', fontSize: '11px', color: '#888', textTransform: 'uppercase' }}>Qty</th>
        <th style={{ textAlign: 'right', padding: '8px 0', fontSize: '11px', color: '#888', textTransform: 'uppercase' }}>Rate</th>
        <th style={{ textAlign: 'right', padding: '8px 0', fontSize: '11px', color: '#888', textTransform: 'uppercase' }}>Amount</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, i) => (
        <tr key={i} style={{ borderBottom: '1px solid #f5f5f5' }}>
          <td style={{ padding: '10px 0' }}>{item.description || '—'}</td>
          <td style={{ padding: '10px 0', textAlign: 'center' }}>{item.quantity || '—'}</td>
          <td style={{ padding: '10px 0', textAlign: 'right' }}>₹{Number(item.rate).toLocaleString('en-IN')}</td>
          <td style={{ padding: '10px 0', textAlign: 'right' }}>₹{Number(item.amount).toLocaleString('en-IN')}</td>
        </tr>
      ))}
    </tbody>
  </table>

  {/* Totals */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
    <div style={{ display: 'flex', gap: '40px', color: '#666' }}>
      <span>Subtotal</span>
      <span>₹{getSubTotal().toLocaleString('en-IN')}</span>
    </div>
    <div style={{ display: 'flex', gap: '40px', color: '#666' }}>
      <span>GST (18%)</span>
      <span>₹{getGst().toLocaleString('en-IN')}</span>
    </div>
    <div style={{ display: 'flex', gap: '40px', fontWeight: '600', fontSize: '16px', borderTop: '1px solid #eee', paddingTop: '8px' }}>
      <span>Total due</span>
      <span style={{ color: '#534AB7' }}>₹{getTotal().toLocaleString('en-IN')}</span>
    </div>
  </div>

  {/* Bank Details */}
  <div style={{ marginTop: '32px', paddingTop: '16px', borderTop: '1px solid #eee', fontSize: '12px', color: '#888' }}>
    <div style={{ marginBottom: '4px', textTransform: 'uppercase', fontSize: '11px' }}>Payment details</div>
    <div style={{ color: '#333' }}>{userDetail.bankDetail || 'UPI / Bank details'}</div>
    <div>Payment within 14 days. Thank you for the project!
</div>
  </div>

</div>

 </div>
 <div className='flex gap-4'>


  <RegularButton className ='h-10 px-6 w-40' onClick={InvoicePdf}>
Download Pdf
  </RegularButton>
    <RegularButton className ='h-10 px-6 w-auto'>
Copy invoice text
  </RegularButton>
</div>
  </>
  )
}
export default InvoiceCompo;