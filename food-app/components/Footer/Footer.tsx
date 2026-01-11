export function Footer(props: { children: string }) {
  return (
    <footer className="
      w-full
      bg-[#8f3a09]
      border-t border-black/10
    ">
      <div className="
        mx-auto
        flex
        items-center
        justify-center
        px-4
        py-3
        text-center
        text-xs
        md:text-sm
        text-black/80
        font-medium
      ">
        {props.children}
      </div>
    </footer>
  )
}

export default Footer
