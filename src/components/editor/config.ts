// import {
//   FileText,
//   Heading1Icon,
//   Images,
//   RectangleHorizontal,
// } from 'lucide-react';
// import { DomStateElement } from './dom';

// interface Component {
//   id: string;
//   name: string;
//   icon: any;
//   element: Omit<DomStateElement, 'id'>;
// }

// export const components: Component[] = [
//   {
//     id: 'core_1',
//     name: 'Box',
//     icon: RectangleHorizontal,
//     element: {
//       children: [],
//       element: 'div',
//       content: 'this is the box',
//       props: {
//         style: {
//           width: '100px',
//           height: '100px',
//           ['background-color']: 'white',
//           border: 'none',
//           ['border-radius']: '0px',
//           ['box-shadow']: 'none',
//           ['margin-top']: '0px',
//           ['margin-left']: '0px',
//           ['margin-right']: '0px',
//           ['margin-bottom']: '0px',
//           ['padding-top']: '0px',
//           ['padding-left']: '0px',
//           ['padding-right']: '0px',
//           ['padding-bottom']: '0px',
//           ['flex-direction']: 'row',
//           ['font-size']: '16px',
//           ['justify-content']: 'flex-start',
//           ['align-items']: 'flex-start',
//           ['flex-wrap']: 'nowrap',
//           ['flex-grow']: '0',
//           ['flex-shrink']: '1',
//           ['flex-basis']: 'auto',
//           ['text-align']: 'left',
//           ['color']: 'black',
//         },
//       },
//     },
//   },
//   {
//     id: 'core_2',
//     name: 'Text',
//     icon: FileText,
//     element: {
//       content: 'this is the text',
//       children: [],
//       element: 'u',
//       props: {
//         style: {
//           color: 'black',
//         },
//       },
//     },
//   },
//   {
//     id: 'core_3',
//     name: 'Picture',
//     icon: Images,
//     element: {
//       children: [],
//       element: 'img',
//       props: {
//         style: {
//           width: '100px',
//           height: '100px',
//         },
//         attributes: {
//           src: 'https://via.placeholder.com/150',
//         },
//       },
//     },
//   },
//   {
//     id: 'core_4',
//     name: 'Heading',
//     icon: Heading1Icon,
//     element: {
//       children: [],
//       content: 'some content',
//       element: 'h1',
//       props: {
//         style: {
//           color: 'black',
//         },
//       },
//     },
//   },
//   {
//     id: 'core_5',
//     name: 'Colour',
//     icon: FileText,
//     element: {
//       children: [],
//       content: 'some content',
//       element: 'i',
//       props: {
//         style: {
//           color: 'black',
//         },
//       },
//     },
//   },
// ];

interface Component {
  id: string;
  name: string;
  html: string;
}

export const components: Component[] = [
  {
    id: "template_1",
    name: "Template 1",
    html: `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>TEST Website</title>
        <meta name="description" content="Test website description">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
        <h1 class="container mx-auto px-4 py-8 text-2xl font-bold flex justify-center"  id="template1-heading">Hello, This is Template 1 Website built for token <span id="token_name">XYZ</span> </h1>
        <img id="template1-image" src="https://st3.depositphotos.com/5906102/14454/v/450/depositphotos_144548047-stock-illustration-crypto-currency-bitcoin-golden-symbol.jpg" alt="image" class="rounded-lg shadow-md mx-auto h-48 "/>
    </body>
</html>
`,
  },
  {
    id: "template_2",
    name: "Template 2",
    html: `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Sample Template 2</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-100">
        <div class="container mx-auto px-4 py-8">
            <h1 id="template2-heading" class="text-4xl font-bold mb-4">Welcome to Template 2!</h1>
            <p id="template2-text" class="text-lg mb-4">This is a sample template created for another example.</p>
            <img id="template2-image" src="https://via.placeholder.com/300x150" alt="Placeholder image" class="rounded-lg shadow-md" />
        </div>
    </body>
</html>
`,
  },
  {
    id: "template_3",
    name: "Template 3",
    html: `<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Apes UI</title>

    <!-- Preconnect to Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap"
      rel="stylesheet"
    />

    <!-- Tailwind CSS -->
   
  </head>

  <body>
      <div>
       <script src="https://cdn.tailwindcss.com"></script>

    <!-- Tailwind CSS Configuration for Custom Fonts -->
    <script>
      tailwind.config = {
        theme: {
          extend: {
            screens: {
              mw1400: { max: "1400px" },
              mw1150: { max: "1150px" },
              mw1100: { max: "1100px" },
              mw1000: { max: "1000px" },
              mw900: { max: "900px" },
              mw850: { max: "850px" },
              mw800: { max: "800px" },
              mw700: { max: "700px" },
              mw650: { max: "650px" },
              mw600: { max: "600px" },
              mw500: { max: "500px" },
            },
            fontFamily: {
              "m-plus-rounded": ['"M PLUS Rounded 1c"', "system-ui"],
            },
          },
        },
      };
    </script>

    <style>
      /* Add custom marquee animation */
      @keyframes scroll {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      .rfm-marquee-container {
        overflow-x: hidden;
        display: flex;
        flex-direction: row;
        position: relative;
        width: var(--width);
        transform: var(--transform);
      }

      .rfm-marquee {
        flex: 0 0 auto;
        min-width: var(--min-width);
        z-index: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        animation: scroll var(--duration) linear var(--delay)
          var(--iteration-count);
        animation-play-state: var(--play);
        animation-delay: var(--delay);
        animation-direction: var(--direction);
      }

      .rfm-child {
        display: inline-block;
      }
    </style>
        <header class="absolute z-10 left-0 w-[100vw]">
          <div
            class="flex justify-between items-center p-4 max-w-[1154px] mx-auto mw900:flex-wrap mw900:gap-6 mw900:justify-center mw800:justify-between"
          >
            <div
              class="flex items-center gap-[18px] mw500:flex-col mw500:items-start mw500:gap-y-[5px]"
            >
              <a class="text-[42px] font-black mw500:text-[42px]" href="/"
                >APES</a
              >
              <p
                class="text-base font-semibold leading-[18px] mw500:text-[11px]"
              >
                POWERED <br class="mw500:hidden" />
                BY SOLANA
              </p>
            </div>
            <nav class="max-w-fit mw800:hidden">
              <ul class="bg-white rounded-xl p-2 flex">
                <li>
                  <a
                    class="inline-block font-bold text-sm px-[25px] py-[10px] rounded-xl text-white bg-[#09474E]"
                    href="/"
                    >MAIN</a
                  >
                </li>
                <li>
                  <button
                    class="inline-block font-bold text-sm px-[25px] py-[10px] text-[#09474E] rounded-xl"
                  >
                    GAME
                  </button>
                </li>
                <li>
                  <button
                    class="inline-block font-bold text-sm px-[25px] py-[10px] text-[#09474E] rounded-xl"
                  >
                    TOKENOMICS
                  </button>
                </li>
                <li>
                  <a
                    class="inline-block font-bold text-sm px-[25px] py-[10px] text-[#09474E] rounded-xl"
                    href="/fun"
                    >FUN</a
                  >
                </li>
                <li>
                  <a
                    class="inline-block font-bold text-sm px-[25px] py-[10px] text-[#09474E] rounded-xl"
                    href="/staking"
                    >STAKING</a
                  >
                </li>
              </ul>
            </nav>
            <div class="flex gap-3">
              <div class="flex gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-white w-[52px] h-[52px] grid place-items-center rounded-full"
                  ><img src="/asset/x.svg" alt="x" /></a
                ><a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-white w-[52px] h-[52px] grid place-items-center rounded-full"
                  ><img
                    class="mr-[3px]"
                    src="/asset/telegram.svg"
                    alt="telegram"
                /></a>
              </div>
              <button
                class="bg-white w-[52px] h-[52px] grid place-items-center rounded-full hidden mw800:grid"
              >
                <img class="w-[25px] h-[25px]" src="/asset/menu.svg" alt="x" />
              </button>
              <nav
                class="max-w-fit absolute right-4 top-[80px] hidden mw800:block overflow-hidden transition-all"
                style="height: 0px"
              >
                <ul class="bg-white rounded-xl p-2 flex flex-col">
                  <li>
                    <a
                      class="inline-block w-full font-bold text-sm px-[25px] py-[10px] text-center rounded-xl text-white bg-[#09474E]"
                      href="/"
                      >MAIN</a
                    >
                  </li>
                  <li>
                    <button
                      class="inline-block w-full font-bold text-sm px-[25px] py-[10px] text-center text-[#09474E] rounded-xl"
                    >
                      GAME
                    </button>
                  </li>
                  <li>
                    <button
                      class="inline-block w-full font-bold text-sm px-[25px] py-[10px] text-center text-[#09474E] rounded-xl"
                    >
                      TOKENOMICS
                    </button>
                  </li>
                  <li>
                    <a
                      class="inline-block w-full font-bold text-sm px-[25px] py-[10px] text-center text-[#09474E] rounded-xl"
                      href="/fun"
                      >FUN</a
                    >
                  </li>
                  <li>
                    <a
                      class="inline-block w-full font-bold text-sm px-[25px] py-[10px] text-center text-[#09474E] rounded-xl"
                      href="/staking"
                      >STAKING</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main>
          <section
            class="relative bg-main h-[792px] min-h-[100dvh] bg-cover bg-no-repeat"
            style="background-image: url('/asset/bg.png')"
          >
            <div
              class="flex items-center justify-center h-full gap-[90px] overflow-hidden mw1100:ml-0 -ml-[30px]"
            >
              <img
                width="446"
                height="619"
                class="-mb-[156px] mw1100:-mb-[149px] mw1100:absolute mw1100:w-[350px] bottom-[150px] z-[11]"
                src="/asset/full-monkey.png"
                alt="monkey"
              />
              <div class="text-center max-w-[750px] w-full mw1100:pb-[300px]">
                <p class="text-[32px] leading-[38px]">Just call me Apes 😉</p>
                <h2
                  class="font-extrabold text-[160px] leading-[150px] mb-[30px] mw600:mb-[15px] mw900:text-[120px] mw900:leading-[130px] mw600:text-[80px] mw600:leading-[90px]"
                >
                  $APES
                </h2>
                <div
                  class="hidden lg:grid grid-cols-4 gap-5 justify-center mw600:grid-cols-2 mw600:gap-5 mw600:mb-[40px]"
                >
                  <a
                    class="w-full"
                    href="https://raydium.io/swap/?inputMint=sol&amp;outputMint=984GBL7PhceChtN64NWLdBb49rSQXX7ozpdkEbR1pump"
                    target="_blank"
                    ><button
                      class="bg-[#FFEA2D] w-full font-extrabold text-base py-[10px] px-4 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90 flex items-center justify-center gap-[2px]"
                    >
                      <img
                        src="/asset/raydium.png"
                        alt="Buy Icon"
                        class="w-7 h-7"
                      />
                      <p>RAYDIUM</p>
                    </button></a
                  ><a
                    class="w-full"
                    href="https://dexscreener.com/solana/di2fyotkztv7kwyyj476kdyk95ispn6jzyrqafwggfet"
                    target="_blank"
                    ><button
                      class="bg-[#FFEA2D] w-full font-extrabold text-base py-[10px] px-4 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90 flex items-center justify-center gap-[2px]"
                    >
                      <img
                        src="/asset/dexscreener.png"
                        alt="DexScreener"
                        class="w-7 h-7"
                      />
                      <p>DEXSCREENER</p>
                    </button></a
                  ><a
                    class="w-full"
                    href="https://www.mexc.com/exchange/APES_USDT"
                    target="_blank"
                    ><button
                      class="bg-[#FFEA2D] w-full font-extrabold text-base py-[10px] px-4 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90 flex items-center justify-center gap-[2px]"
                    >
                      <img src="/asset/mexc.png" alt="MEXC" class="w-7 h-7" />
                      <p>MEXC</p>
                    </button></a
                  ><a
                    class="w-full"
                    href="https://bingx.com/en/spot/APESUSDT"
                    target="_blank"
                    ><button
                      class="bg-[#FFEA2D] w-full font-extrabold text-base py-[10px] px-4 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90 flex items-center justify-center gap-[2px]"
                    >
                      <img src="/asset/bingx.png" alt="BINGX" class="w-7 h-7" />
                      <p>BINGX</p>
                    </button></a
                  ><a
                    class="w-full"
                    href="https://www.okx.com/web3/dex-swap?inputChain=501&amp;inputCurrency=11111111111111111111111111111111&amp;outputChain=501&amp;outputCurrency=984GBL7PhceChtN64NWLdBb49rSQXX7ozpdkEbR1pump"
                    target="_blank"
                    ><button
                      class="bg-[#FFEA2D] w-full font-extrabold text-base py-[10px] px-4 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90 flex items-center justify-center gap-[2px]"
                    >
                      <img src="/asset/ok.png" alt="OKX" class="w-7 h-7" />
                      <p>OKX</p>
                    </button></a
                  ><a
                    class="w-full"
                    href="https://www.dextools.io/app/en/solana/pair-explorer/Di2FYotKzTV7Kwyyj476KDyk95ispN6jZYRQafwGGFet?t=1723744111380"
                    target="_blank"
                    ><button
                      class="bg-[#FFEA2D] w-full font-extrabold text-base py-[10px] px-4 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90 flex items-center justify-center gap-[2px]"
                    >
                      <img
                        src="/asset/dextools.png"
                        alt="DexTools"
                        class="w-7 h-7"
                      />
                      <p>DEXTOOLS</p>
                    </button></a
                  ><a
                    class="w-full"
                    href="https://coinmarketcap.com/currencies/apes/"
                    target="_blank"
                    ><button
                      class="bg-[#FFEA2D] w-full font-extrabold text-base py-[10px] px-4 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90 flex items-center justify-center gap-[2px]"
                    >
                      <img
                        src="/asset/cmc.png"
                        alt="CoinMarketCap"
                        class="w-7 h-7"
                      />
                      <p>COINMARKETCAP</p>
                    </button></a
                  ><a
                    class="w-full"
                    href="https://www.coingecko.com/en/coins/apes-2"
                    target="_blank"
                    ><button
                      class="bg-[#FFEA2D] w-full font-extrabold text-base py-[10px] px-4 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90 flex items-center justify-center gap-[2px]"
                    >
                      <img
                        src="/asset/cg.png"
                        alt="CoinGecko"
                        class="w-7 h-7"
                      />
                      <p>COINGECKO</p>
                    </button></a
                  >
                </div>
              </div>
            </div>
            <div
              class="rfm-marquee-container bg-[#FFEA2D] font-bold text-[25px] border-t-2 border-b-2 border-t-[#09474E] border-b-[#09474E] bottom-0"
              style="
                position: absolute;
                --pause-on-hover: running;
                --pause-on-click: running;
                --width: 100%;
                --transform: none;
              "
            >
              <div
                class="rfm-marquee"
                style="
                  --play: running;
                  --direction: normal;
                  --duration: 63.590625s;
                  --delay: 0s;
                  --iteration-count: infinite;
                  --min-width: 100%;
                "
              >
                <div class="rfm-initial-child-container">
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                </div>
              </div>
              <div
                class="rfm-marquee"
                style="
                  --play: running;
                  --direction: normal;
                  --duration: 63.590625s;
                  --delay: 0s;
                  --iteration-count: infinite;
                  --min-width: 100%;
                "
              >
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
              </div>
            </div>
          </section>
          <section class="py-[100px] mw1100:py-[75px] px-4">
            <div
              class="flex items-center justify-between max-w-[1154px] mx-auto mb-[40px]"
            >
              <div class="flex flex-col gap-5">
                <h2
                  class="font-extrabold text-[80px] mw1100:text-[60px] leading-[56px] mw600:leading-[40px] mw600:text-[40px] mw600:text-center"
                >
                  INTEGRATIONS
                </h2>
                <p class="text-2xl leading-[17px] mw600:text-center">
                  Apes is available for trading on major exchanges.
                </p>
              </div>
            </div>
            <div class="max-w-[1154px] mx-auto overflow-hidden">
              <div class="grid grid-cols-5 gap-4">
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://raydium.io/swap/?inputMint=sol&amp;outputMint=984GBL7PhceChtN64NWLdBb49rSQXX7ozpdkEbR1pump"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/raydium.png"
                      alt="raydium"
                  /></a>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://www.okx.com/web3/dex-swap?inputChain=501&amp;inputCurrency=11111111111111111111111111111111&amp;outputChain=501&amp;outputCurrency=984GBL7PhceChtN64NWLdBb49rSQXX7ozpdkEbR1pump"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/okx.png"
                      alt="okx"
                  /></a>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://web3.bitget.com/ru/swap/sol/984GBL7PhceChtN64NWLdBb49rSQXX7ozpdkEbR1pump"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/bidgetwallet.png"
                      alt="bidgetwallet"
                  /></a>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://www.dextools.io/app/en/solana/pair-explorer/Di2FYotKzTV7Kwyyj476KDyk95ispN6jZYRQafwGGFet?t=1723744111380"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/dextools.png"
                      alt="dextools"
                  /></a>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://dexscreener.com/solana/di2fyotkztv7kwyyj476kdyk95ispn6jzyrqafwggfet"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/dexscreener.png"
                      alt="dexscreener"
                  /></a>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://www.mexc.com/exchange/APES_USDT"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/mexc.png"
                      alt="mexc"
                  /></a>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://bingx.com/en/spot/APESUSDT"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/bingx.png"
                      alt="bingx"
                  /></a>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://www.lbank.com/trade/apes_usdt"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/lbank.png"
                      alt="lbank"
                  /></a>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://www.bitmart.com/trade"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/bitmart.png"
                      alt="bitmart"
                  /></a>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <div
                    class="flex h-full w-full items-center justify-center cursor-default"
                  >
                    <img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/tba.png"
                      alt="tba"
                    />
                  </div>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://www.coingecko.com/en/coins/apes-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/coingecko.png"
                      alt="coingecko"
                  /></a>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://coinmarketcap.com/currencies/apes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/coinmarketcap.png"
                      alt="coinmarketcap"
                  /></a>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://cryptorank.io/price/apes"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/cryptorank.png"
                      alt="cryptorank"
                  /></a>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://moontok.io/coins/apes-10"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/moontok.png"
                      alt="moontok"
                  /></a>
                </div>
                <div class="h-[121px] w-[220px] rounded-xl bg-[#EBF6F7]">
                  <a
                    href="https://ave.ai/token/984GBL7PhceChtN64NWLdBb49rSQXX7ozpdkEbR1pump-solana?from=Default"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-full w-full items-center justify-center"
                    ><img
                      class="mix-blend-multiply w-[80%] object-cover mw1100:w-[70%]"
                      src="/asset/home/ave.png"
                      alt="ave"
                  /></a>
                </div>
              </div>
            </div>
          </section>
          <section
            id="game"
            class="relative bg-cover bg-no-repeat pt-[182px] pb-[191px] mw1000:pt-[81px] mw1000:pb-[450px]"
            style="background-image: url('/asset/home/bg-mini-app-2.png')"
          >
            <div
              class="relative grid grid-cols-[1fr_1fr] items-center justify-items-end px-16 z-[2] mw1000:grid-cols-[1fr] mw1000:justify-items-start"
            >
              <div class="max-w-[400px] text-center mr-[150px] mw1000:mr-auto">
                <h2
                  class="font-extrabold text-[80px] mw1100:text-[60px] mw1100:leading-[60px] leading-[75px] mw600:leading-[40px] mw600:text-[40px]"
                >
                  $APES MINI APP
                </h2>
                <p class="text-2xl leading-[30px] mb-10">
                  Become the top Ape Gang - stack up the most bananas and rocket
                  to the moon!💣🚀🍌
                </p>
                <a href="#" target="_blank"
                  ><button
                    class="bg-[#FFEA2D] max-w-[200px] w-full font-extrabold text-base py-[13px] px-2 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90"
                  >
                    PLAY GAME
                  </button></a
                >
              </div>
              <div
                class="absolute left-1/2 mw1000:mr-0 -bottom-[191px] mw1000:-bottom-[450px] mw700:left-1/4 mw500:left-0"
              >
                <img
                  class="min-w-[688px] mw1000:min-w-[463px] pointer-events-none"
                  width="446"
                  height="700"
                  src="/asset/full-monkey-reverse.png"
                  alt="monkey"
                />
              </div>
            </div>
            <!-- <div
              class="rfm-marquee-container bg-[#FFEA2D] font-bold text-[25px] border-t-2 border-b-2 border-t-[#09474E] border-b-[#09474E] bottom-0"
              style="
                position: absolute;
                --pause-on-hover: running;
                --pause-on-click: running;
                --width: 100%;
                --transform: none;
              "
            >
              <div
                class="rfm-marquee"
                style="
                  --play: running;
                  --direction: normal;
                  --duration: 63.590625s;
                  --delay: 0s;
                  --iteration-count: infinite;
                  --min-width: 100%;
                "
              >
                <div class="rfm-initial-child-container">
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                </div>
              </div>
              <div
                class="rfm-marquee"
                style="
                  --play: running;
                  --direction: normal;
                  --duration: 63.590625s;
                  --delay: 0s;
                  --iteration-count: infinite;
                  --min-width: 100%;
                "
              >
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
              </div>
            </div> -->
          </section>
          <section
            class="bg-cover bg-center bg-no-repeat py-[94px] px-16"
            style="background-image: url('/asset/home/bg-cap-tool.png')"
          >
            <div
              class="mx-auto max-w-[1154px] flex items-center justify-center gap-[100px] mw900:gap-[30px] mw800:flex-col-reverse"
            >
              <img
                class="max-w-[480px] mw1100:max-w-[300px] mw850:max-w-[250px] z-[1]"
                src="/asset/animation.gif"
                style="border-radius: 10px"
              />
              <div class="text-center max-w-[465px]">
                <h2
                  class="font-extrabold text-[80px] mw1100:text-[60px] mw1100:leading-[60px] leading-[75px] mw600:leading-[40px] mw600:text-[40px] mb-8"
                >
                  BE IN OUR APES GANG
                </h2>
                <p class="text-2xl leading-[30px] mb-10">
                  Join the APES gang by wearing a cap and chain using our tool.
                </p>
                <a href="/fun"
                  ><button
                    class="bg-[#FFEA2D] max-w-[200px] w-full font-extrabold text-base py-[13px] px-2 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90"
                  >
                    CAP TOOL
                  </button></a
                >
              </div>
            </div>
          </section>
          <section
            id="tokenomics"
            class="bg-[#EBF6F7] py-[100px] mw1100:py-[75px] px-4"
          >
            <div
              class="flex justify-center gap-20 max-w-[1154px] mx-auto mw1100:flex-col mw1100:items-center"
            >
              <div class="max-w-[543px] mw600:px-4">
                <div class="mb-6 flex flex-col gap-6 text-center">
                  <h2
                    class="font-extrabold text-[80px] mw1100:text-[60px] mw1100:leading-[60px] leading-[80px] mw600:leading-[40px] mw600:text-[40px]"
                  >
                    TOKENOMICS &amp; STAKING
                  </h2>
                </div>
                <div class="flex gap-3 mb-3">
                  <div
                    class="flex flex-col gap-2 text-center bg-white rounded-xl p-7 w-full mw600:p-3"
                  >
                    <span class="font-bold text-base">TOTAL SUPPLY</span>
                    <p class="font-extrabold text-3xl mw600:text-xl">
                      Billion!
                    </p>
                  </div>
                  <div
                    class="flex flex-col gap-2 text-center bg-white rounded-xl p-7 w-full mw600:p-3"
                  >
                    <span class="font-bold text-base">TOTAL $APES STAKED</span>
                    <p class="font-extrabold text-3xl mw600:text-xl">Soon</p>
                  </div>
                </div>
                <div
                  class="flex flex-col gap-2 text-center bg-white rounded-xl p-7 mb-6 mw600:p-3"
                >
                  <span class="font-bold text-base">TOKEN ADDRESS</span>
                  <p
                    class="font-extrabold text-[23px] mw600:text-xl break-words"
                    style="word-break: break-all"
                  >
                    984GBL7PhceChtN64NWLdBb49rSQXX7ozpdkEbR1pump
                  </p>
                </div>
                <div class="flex gap-5 justify-center mw650:flex-col">
                  <button
                    class="bg-[#FFEA2D] max-w-[200px] w-full font-extrabold text-base py-[13px] px-2 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90 mw650:max-w-full"
                  >
                    <span style="font-size: 11px; display: block"
                      >Powered by:</span
                    ><span
                      class="flex items-center ml-[12%] mw650:justify-center mw650:ml-0"
                      ><img
                        src="/asset/pump.png"
                        alt="logo"
                        style="
                          vertical-align: middle;
                          width: 24px;
                          margin-right: 4px;
                        "
                      /><span style="font-size: 1.2rem; font-weight: 800"
                        >Pump.fun</span
                      ></span
                    >
                  </button>
                  <div
                    class="flex items-center justify-center w-[200px] mw650:w-full"
                  >
                    <a
                      href="https://raydium.io/swap/?inputMint=sol&amp;outputMint=984GBL7PhceChtN64NWLdBb49rSQXX7ozpdkEbR1pump"
                      target="_blank"
                      class="w-full"
                      ><button
                        class="bg-[#FFEA2D] w-full font-extrabold text-base py-[13px] px-4 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90"
                      >
                        BUY $APES
                      </button></a
                    >
                  </div>
                  <button
                    class="bg-[#FFEA2D] max-w-[200px] w-full font-extrabold text-base py-[13px] px-2 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90 mw650:max-w-full"
                  >
                    STAKING
                  </button>
                </div>
              </div>
              <video
                class="h-[480px] mw1100:h-[auto] mw1100:w-full mt-[10px] mw1100:max-w-[550px] mw1100:-mb-[50px] z-[1]"
                src="/asset/video.mp4"
                controls=""
                autoplay=""
                loop=""
              ></video>
            </div>
          </section>
          <section
            class="relative bg-cover bg-center bg-no-repeat"
            style="background-image: url('/asset/home/bg-socials.png')"
          >
            <div
              class="relative grid grid-cols-[1fr_1fr] items-center justify-items-start px-16 z-[2] mw1000:grid-cols-[1fr] mw1000:justify-items-start pt-[191px] pb-[50px] gap-60 mw1000:gap-0 mw1000:pt-20 mw1000:justify-center"
            >
              <div
                class="absolute -left-8 -bottom-[31px] mw1150:-left-40 pointer-events-none mw1000:left-0 mw1000:bottom-1"
              >
                <img
                  class="h-[640px] mw1000:h-[387px] min-w-[405px] object-cover"
                  src="/asset/animation3.gif"
                />
              </div>
              <div class="mw1000:hidden"></div>
              <div
                class="relative text-center flex justify-between gap-4 mw1000:gap-y-[14px] mw1400:flex-col mw1000:w-full"
              >
                <div
                  class="text-center flex flex-col justify-between gap-y-[126px] mw1000:gap-y-[14px] mw1000:w-full"
                >
                  <div
                    class="flex flex-col gap-[30px] mw1000:gap-[14px] mw1000:pb-[360px]"
                  >
                    <div class="flex flex-col gap-8 mw1000:gap-6">
                      <h2
                        class="font-extrabold text-[80px] mw1100:text-[60px] leading-[60px] mw600:leading-[40px] mw600:text-[40px]"
                      >
                        SOCIALS
                      </h2>
                      <p class="text-2xl">Join the $APES community</p>
                      <div class="flex justify-center gap-3">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="bg-white w-[52px] h-[52px] grid place-items-center rounded-full"
                          ><img src="/asset/x.svg" alt="x" /></a
                        ><a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="bg-white w-[52px] h-[52px] grid place-items-center rounded-full"
                          ><img src="/asset/telegram.svg" alt="telegram"
                        /></a>
                      </div>
                    </div>
                    <a href="#" target="_blank"
                      ><button
                        class="bg-[#FFEA2D] max-w-[200px] w-full font-extrabold text-base py-[13px] px-2 shadow-[0_4px_0_0_#e7b400] rounded-xl transition-opacity hover:opacity-90"
                      >
                        CLICK TO APE IN
                      </button></a
                    >
                    <div
                      class="mw1000:block max-w-[360px] mx-auto hidden text-base font-semibold leading-[18px] mw1000:text-xs mt-auto"
                    >
                      <p>
                        $APES is a meme coin inspired by APE. Remember the
                        risks. Prohibited for trading by residents of the USA
                        and other regulated countries.
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex justify-center items-center gap-[18px] mw1000:flex-col mw1000:gap-0 mw1000:items-start mw1000:w-fit mw1000:absolute mw1000:right-0 mw1000:bottom-0"
                  >
                    <a class="text-[42px] font-black mw1000:text-2xl" href="/"
                      >APES</a
                    >
                    <p
                      class="flex flex-col items-start text-base font-semibold leading-[18px] mw1000:text-xs"
                    >
                      <span>POWERED</span> <span>BY SOLANA</span>
                    </p>
                  </div>
                </div>
                <div
                  class="mw1000:hidden text-base font-semibold leading-[18px] mw1000:text-xs mt-auto"
                >
                  <p>
                    $APES is a meme coin inspired by APE. Remember the risks.
                    Prohibited for trading by residents of the USA and other
                    regulated countries.
                  </p>
                </div>
              </div>
            </div>
            <div></div>
            ,
            <!-- <div
              class="rfm-marquee-container bg-[#FFEA2D] font-bold text-[25px] border-t-2 border-b-2 border-t-[#09474E] border-b-[#09474E] bottom-0"
              style="
                position: absolute;
                bottom: 0px;
                --pause-on-hover: running;
                --pause-on-click: running;
                --width: 100%;
                --transform: none;
              "
            >
              <div
                class="rfm-marquee"
                style="
                  --play: running;
                  --direction: normal;
                  --duration: 63.590625s;
                  --delay: 0s;
                  --iteration-count: infinite;
                  --min-width: 100%;
                "
              >
                <div class="rfm-initial-child-container">
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                  <div class="rfm-child" style="--transform: none">
                    <p class="mr-[27px]">$APES</p>
                  </div>
                </div>
              </div>
              <div
                class="rfm-marquee"
                style="
                  --play: running;
                  --direction: normal;
                  --duration: 63.590625s;
                  --delay: 0s;
                  --iteration-count: infinite;
                  --min-width: 100%;
                "
              >
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
                <div class="rfm-child" style="--transform: none">
                  <p class="mr-[27px]">$APES</p>
                </div>
              </div>
            </div> -->
          </section>
        </main>
      </div>
    
  </body>
</html>


`,
  },
  {
    id: "template_4",
    name: "Template 4",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Card-based UI</title>
    <style>
        :root {
            --primary-color: #3498DB;
            --secondary-color: #2ECC71;
            --text-color: #333;
            --background-color: #F4F4F4;
        }
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--background-color);
            color: var(--text-color);
            line-height: 1.6;
        }
        header {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 1rem;
        }
        nav {
            background-color: white;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        nav ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            justify-content: center;
        }
        nav ul li {
            margin: 0 15px;
        }
        nav ul li a {
            text-decoration: none;
            color: var(--primary-color);
            font-weight: bold;
            transition: color 0.3s ease;
        }
        nav ul li a:hover {
            color: var(--secondary-color);
        }
        main {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 2rem;
        }
        .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
            overflow: hidden;
            transition: transform 0.3s ease;
            width: calc(33% - 1rem);
        }
        .card:hover {
            transform: translateY(-5px);
        }
        .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .card-content {
            padding: 1.5rem;
        }
        .card-content h3 {
            margin-top: 0;
            color: var(--primary-color);
        }
        footer {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
        }
        @media (max-width: 768px) {
            .card {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Modern Card-based UI</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <div class="card-container">
            <div class="card">
                <img src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" alt="Project 1">
                <div class="card-content">
                    <h3>Project 1</h3>
                    <p>This is a description of Project 1. It was an exciting endeavor that showcased our skills in web development.</p>
                </div>
            </div>
            <div class="card">
                <img src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" alt="Project 2">
                <div class="card-content">
                    <h3>Project 2</h3>
                    <p>Project 2 was a challenging mobile app development project that pushed our creativity to new limits.</p>
                </div>
            </div>
            <div class="card">
                <img src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" alt="Project 3">
                <div class="card-content">
                    <h3>Project 3</h3>
                    <p>For Project 3, we created a robust backend system that could handle millions of requests per second.</p>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <p>&copy; 2024 Modern Card-based UI. All rights reserved.</p>
    </footer>
</body>
</html>`,
  },
];
