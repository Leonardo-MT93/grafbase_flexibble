import Navbar from '@/components/Navbar'
import './global.css'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Flexxibble - By Leonify',
  description: 'Showcase and discover remarable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
