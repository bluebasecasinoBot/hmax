import { __c, __p, __sC, __SYD } from "./sydneyLib/sydneyDom.js";

__SYD.roadMapPage = () =>{
    return __c(
        "div",
        {
            style:"min-height:fit-content;padding:70px 0;width:100%;background-image:url('./design/roadMap.png');background-position:0,0;column-gap:20px;justify-content:space-around;align-items:center;position:relative;" + __sC["container"]({method:"use" , style:['display','rowGap']}),
            class:"page4_flex",
            id:'roadMap'
        },
        [
            __c(
                "p",
                {
                    style:"display:flex;flex-direction:column;row-gap:30px;text-align:center;font-weight:900;align-items:center;font-size:14px;padding:0 15px;", //+ __sC['txt_shade1'](),
                    class:"page2_text"
                },
                [
                    __c(
                        "p",
                        {
                            style:`font-size:25px;font-weight:900;text-transform:capitalize;margin-bottom:10px;width:fit-content;font-family:header;color:#fff;margin-bottom:10px;font-size:${__p(['roadMapPage' , '__font'],{1:'30px'})['1']};` + __sC['txt_shade2'](),
                            class:"tokenomic_text"
                        },
                        [
                            "ROADMAP"
                        ]
                    ),

                    __c(
                        "div",
                        {
                            style:`color:#fff;font-family:sunrise;display:flex;flex-direction:column;align-items:center;row-gap:60px;height:fit-content;width:100%;font-weight:100;`// +__sC['txt_shade3']()//transform: translateX(25%) scale(${__p(['roadMapPage' , '__query'],false) ? ".8" : "1"});
                        },
                        [
                            __c(
                                "p",
                                {
                                    style:"background:#FF5722;padding:15px 10px;transform:translateX(0px);width:50%;min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #49180a;border-radius:10px;animation-delay:0s;",
                                    class:"left_slant "
                                },
                                [
                                        __c("strong",{},[`1️⃣ Launch & Deploy – `]) , `Smart contract, website, and socials live. 🚀`
                                ]
                            ),
                            __c(
                                "p",
                                {
                                    style:"background:#FF5722;padding:15px 10px;transform:translateX(0px);width:50%;min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #49180a;border-radius:10px;animation-delay:.4s;",
                                    class:"left_slant "
                                },
                                [
                                    __c("strong",{},[`2️⃣ Airdrops & Community - `]) , `Free drops, viral memes, and influencer collabs. 🎉`
                                ]
                            ),
                            __c(
                                "p",
                                {
                                    style:`background:#FF5722;padding:15px 10px;transform:translateX(0px);width:50%;min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #49180a;border-radius:10px;animation-delay:.8s;`,
                                    class:"left_slant"
                                },
                                [
                                    __c("strong",{},[`3️⃣ Listings & Liquidity – `]) , `DEX launch (Uniswap/PancakeSwap), CoinGecko & CMC. 💰`
                                ]
                            ),
                            __c(
                                "p",
                                {
                                    style:"background:#FF5722;padding:15px 10px;transform:translateX(0px);width:50%;min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #49180a;border-radius:10px;animation-delay:.4s;",
                                    class:"right_slant"
                                },
                                [
                                    __c("strong",{},[`4️⃣ Utility & HODL Benefits – `]) , `Staking, NFTs, and exclusive rewards. 🔥`
                                ]
                            ),
                            __c(
                                "p",
                                {
                                    style:"background:#FF5722;padding:15px 10px;transform:translateX(0px);width:50%;min-width:200px;margin-left:15px;box-shadow:2px 2px 1px #49180a;border-radius:10px;animation-delay:.4s;text-align:right;",
                                    class:""
                                },
                                [
                                    __c("strong",{},[`5️⃣ Big CEX Listings & Hype – `]) , `Massive marketing & major exchange listings. 🌕`
                                ]
                            )
                        ]
                    )
                ]
            ),
        ],
        {
            createState:{
                stateName:"roadMapPage",
                state:{__query:false,__font:{1:'30px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:"<600px",prop:{__query:true,__font:{1:'25px',2:'17px'}}}],
                defState:{__query:false,__font:{1:'30px',2:'20px'}}
            }
        }
    )
}
