import { Interface } from '@ethersproject/abi'
import { ChainId } from '@flash-swap/sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xC07d4604400139108BbdB3076636365A385879eF', // TODO
  [ChainId.TESTNET]: '0xd4be54d86594951b122caa24a204ae48d700b290'
  // [ChainId.TESTNET]: '0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc'
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
