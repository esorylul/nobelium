import BLOG from '@/blog.config'
const Footer = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  return (
    <div className={`mt-6 flex-shrink-0 m-auto font-noEmoji w-full text-gray-600 dark:text-gray-400 transition-all ${!fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'}`}>
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="flex justify-start my-4 text-sm text-center leading-6 font-medium">
        <p>Power by <a href="https://github.com/craigary/nobelium" target="_blank" rel="noreferrer">Nobelium</a></p>
      </div>
    </div>
  )
}

export default Footer
