

const Button = ({ styles }) => {
  return (
    <div>
      <button type="butoon" className={`py-2 px-3 bg-blue-gradient rounded font-medium text-[18px] text-primary outline-none ${styles}`}>
        Get Started
      </button>
    </div>
  )
}

export default Button