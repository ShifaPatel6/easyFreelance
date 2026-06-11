import useWorkedItemStore from '../Store/WorkedItemStore'
import useInvoicedetailStore from '../Store/UserDetailStore';

const CopyInvoice = async () => {

  console.log("came in copy util");
  

  //added store state like this becuase hooks onlycalls in component and custom hooks not in handlers
  const { items, getSubTotal, getGst, getTotal } = useWorkedItemStore.getState()
  const { userDetail, clientDetail } = useInvoicedetailStore.getState()

  const invoiceText = `
INVOICE
───────────────────────────────
From: ${userDetail?.name}
Email: ${userDetail?.email}

Billed to: ${clientDetail?.name}
Company: ${clientDetail?.company}
Invoice Date: ${clientDetail?.invoiceDate}
Due Date: ${clientDetail?.dueDate}

ITEMS
───────────────────────────────
${items?.map(item =>
  `${item.description} | Qty: ${item.quantity} | Rate: ₹${item.rate} | Amount: ₹${Number(item.quantity) * Number(item.rate)}`
).join('\n')}

───────────────────────────────
Subtotal : ₹${getSubTotal().toLocaleString('en-IN')}
GST 18%  : ₹${getGst().toLocaleString('en-IN')}
Total    : ₹${getTotal().toLocaleString('en-IN')}

Payment: ${userDetail?.bankDetail}
  `
await navigator.clipboard.writeText(invoiceText)


}

export default CopyInvoice;