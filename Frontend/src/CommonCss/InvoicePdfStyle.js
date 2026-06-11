// InvoiceStyles.js — All styles for InvoiceCompo

export const invoiceStyles = {

  // Outer wrapper
  wrapper: {
    backgroundColor: '#ffffff',
    padding: '10px',
    width: '700px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#1a1a1a',
  },

  // Bordered inner container
  container: {
    border: '2px solid black',
    padding: '40px',
  },

  // ── Header ──────────────────────────────────────────
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '32px',
  },

  senderName: {
    fontSize: '18px',
    fontWeight: '600',
  },

  senderEmail: {
    color: '#666',
    marginTop: '4px',
  },

  invoiceTitleBlock: {
    textAlign: 'right',
  },

  invoiceTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#534AB7',
  },

  invoiceNumber: {
    color: '#888',
    fontSize: '12px',
    marginTop: '4px',
  },

  // ── Billed To + Dates ────────────────────────────────
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '28px',
  },

  sectionLabel: {
    fontSize: '11px',
    color: '#888',
    marginBottom: '6px',
    textTransform: 'uppercase',
  },

  clientName: {
    fontWeight: '500',
  },

  clientCompany: {
    color: '#666',
  },

  dateLabel: {
    fontSize: '11px',
    color: '#888',
    marginBottom: '6px',
    textTransform: 'uppercase',
  },

  dueDateLabel: {
    fontSize: '11px',
    color: '#888',
    marginTop: '10px',
    marginBottom: '6px',
    textTransform: 'uppercase',
  },

  // ── Items Table ──────────────────────────────────────
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },

  tableHeadRow: {
    borderBottom: '1px solid #eee',
  },

  thBase: {
    padding: '8px 0',
    fontSize: '11px',
    color: '#888',
    textTransform: 'uppercase',
  },

  thLeft: {
    textAlign: 'left',
  },

  thCenter: {
    textAlign: 'center',
  },

  thRight: {
    textAlign: 'right',
  },

  tableBodyRow: {
    borderBottom: '1px solid #f5f5f5',
  },

  tdBase: {
    padding: '10px 0',
  },

  tdCenter: {
    padding: '10px 0',
    textAlign: 'center',
  },

  tdRight: {
    padding: '10px 0',
    textAlign: 'right',
  },

  // ── Totals ───────────────────────────────────────────
  totalsBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '6px',
  },

  totalRow: {
    display: 'flex',
    gap: '40px',
    color: '#666',
  },

  grandTotalRow: {
    display: 'flex',
    gap: '40px',
    fontWeight: '600',
    fontSize: '16px',
    borderTop: '1px solid #eee',
    paddingTop: '8px',
  },

  grandTotalAmount: {
    color: '#534AB7',
  },

  // ── Payment Details ──────────────────────────────────
  paymentSection: {
    marginTop: '32px',
    paddingTop: '16px',
    borderTop: '1px solid #eee',
    fontSize: '12px',
    color: '#888',
  },

  paymentLabel: {
    marginBottom: '4px',
    textTransform: 'uppercase',
    fontSize: '11px',
  },

  paymentDetail: {
    color: '#333',
  },

  // ── Buttons Row ──────────────────────────────────────
  buttonRow: {
    // uses Tailwind: className="flex gap-4"
    // no extra styles needed here
  },
};