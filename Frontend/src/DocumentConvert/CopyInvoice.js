


const handleCopy = async () => {
  const invoiceText = `
INVOICE
───────────────────────────────
From: ${userDetail.name}
Email: ${userDetail.email}

Billed to: ${clientDetail.name}
Company: ${clientDetail.company}
Invoice Date: ${clientDetail.invoiceDate}
Due Date: ${clientDetail.dueDate}

ITEMS
───────────────────────────────
${items.map(item =>
  `${item.description} | Qty: ${item.quantity} | Rate: ₹${item.rate} | Amount: ₹${Number(item.quantity) * Number(item.rate)}`
).join('\n')}

───────────────────────────────
Subtotal : ₹${getSubTotal().toLocaleString('en-IN')}
GST 18%  : ₹${getGst().toLocaleString('en-IN')}
Total    : ₹${getTotal().toLocaleString('en-IN')}

Payment: ${userDetail.bankDetail}
  `

  await navigator.clipboard.writeText(invoiceText)
  alert('Invoice copied!')
}