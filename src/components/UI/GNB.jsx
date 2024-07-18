export default function GNB() {
  return (
    <div id='gnb'>
      <div className='menu-btn'>
        <img src='/images/common/menu-icon.svg' alt='' />
      </div>
      <div className='logo'>
        <button
          onClick={() => {
            window.location.reload()
          }}
        >
          <img src='/images/common/logo.svg' alt='' />
        </button>
      </div>
    </div>
  )
}
