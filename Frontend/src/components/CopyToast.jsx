
const CopyToast = ({ show }) => {
  if (!show) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '39%',
      background: 'white',
      color: '#534AB7',
      padding: '3px 10px',
      borderRadius: '8px',
      fontSize: '14px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 9999,
      animation: 'fadeIn 0.2s ease'

    }}>
       Copied !
    </div>
  )
}

export default CopyToast