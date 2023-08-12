import { ConnectWallet } from '@thirdweb-dev/react'
import { useAddress } from '@thirdweb-dev/react'
import { Text, Box, Image, Center } from '@chakra-ui/react';


export default function Home() {
  const address = useAddress()

  return (<div class="min-h-screen relative bg-bg-primary flex flex-col justify-center sm:py-12">
<video autoPlay loop muted class="w-full h-full object-cover absolute">
  <source src='src\Bgg.mp4' type='video/mp4' /> </video>

<nav class=" flex items-center p-4 sm:p-6 w-full flex-row justify-between z-10">
        <div className="flex">
        <Image src='src\CD.png' alt='CoinDispute' 
            boxSize= '60px'
            marginLeft={2}
            />
          
        </div>
        <ul>
          <li>
            <ConnectWallet />
          </li>
        </ul>
      </nav>
    
  <h1 class= "font-bold text-center relative py-6 sm:max-w-xl sm:mx-auto text-white">
    <Text
        bgGradient='linear(to-l, #E21818, #9CFF2E)'
        bgClip='text'
        fontSize='4xl'
        fontWeight='extrabold'>
        CoinDispute DAO Airdrop
    </Text>
  </h1>

    <div class="container mx-auto p-4 z-10 sm:px-4">
    <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
      <div class="w-full sm:w-1/2 px-4">
        <div class="backdrop-blur-xl rounded-lg shadow-md p-5 bg-opacity-50">
        <center>
        <Image src='src\emoji.png' alt='Winner'
            boxSize= '60px'
            marginLeft={2}
            />
            </center>
          <h1 className="text-3xl font-medium text-white text-center">Congratulations!
          <br></br>
          You are eligible for the airdrop!
          </h1>
          
          <div class="flex justify-between bg-slate-400 bg-opacity-50 rounded-lg py-6 my-6 ">
            <p class="mr-4 mx-6 text-sm justify-start">You will receive<br/><span class="text-2xl text-green-500 font-bold inline-flex">625,308
            <Image src='src\Hash.png' alt='Token' borderRadius='full'
            boxSize= '25px'
            marginLeft={2}
            mt={1}
            />
            </span></p>
            <button class="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-lg mx-6 ">
            Claim
            </button>
          </div>
          
          <hr />

          <h1 class="pt-3 text-white">Excess $HASH should be burned after claim </h1>
          <div class="flex justify-start items-center mb-3">
            <p class="mr-4 text-white">Claiming will end in: </p>
            
            <div id='demo' class="bg-slate-700 text-slate-300 font-bold py-2 px-16 rounded-lg bg-opacity-50 mx-4">
            <p id='demo'></p>
            
            </div>
              </div>

              <div class="flex justify-start items-center mb-3">
            <p class="mr-4 text-white">$HASH for airdrop left: </p>
            <center>
            <div class="bg-slate-700  text-slate-300 font-bold py-2 px-16 rounded-lg bg-opacity-50">
            84,736,229
             </div>
             </center>
              </div>

          </div>
      </div>

      <div class="w-full sm:w-1/2 px-4">
        <div class="backdrop-blur-xl bg-opacity-50 rounded-lg p-5">
          <h1 className="text-2xl font-medium text-white">Qualifying Actions</h1>
          <ol class="text-white pb-56">
            <li>
            &#43;
              Ethereum Mainnet
            </li>
            <li>
            &#43;
            Valid Dispute ID 
            </li>
            <li>
            &#43;
            DEX user
            </li>
            <li>
            &#215;
            Wrapped Eth
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</div>
  
)};

