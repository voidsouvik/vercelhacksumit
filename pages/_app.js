import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { WBProvider } from '../context/WBContext'
import { ModalProvider } from 'react-simple-hook-modal'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.SERVER_URL}
      appId={process.env.APPLICATION_ID}
    >
      <WBProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </WBProvider>
    </MoralisProvider>
  )
}

export default MyApp
