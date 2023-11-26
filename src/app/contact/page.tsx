'use client'

import { useRouter } from "next/navigation"

export default function Contact() {
  const router = useRouter();
  const handleButton = () => {
    router.push("/");
  }

  return (
    <div>
      <button onClick={() => handleButton()}>Back home</button>
    </div>
  )
}
