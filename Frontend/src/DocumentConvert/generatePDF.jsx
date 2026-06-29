import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'


const generatePDF = async (clientDetail) => {

  const element = document.getElementById('invoice-preview')

  const canvas = await html2canvas(element, {
    scale: 2,              // ← better quality
    useCORS: true,
    backgroundColor: '#ffffff',// ← white background
    width: 700 ,
    windowWidth: 1000 
  })

  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF('p', 'mm', 'a4')

  const pdfWidth  = pdf.internal.pageSize.getWidth()
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
  pdf.save(`${clientDetail.name} Invoice.pdf`)
}
export default generatePDF

