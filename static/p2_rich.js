import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v, createElement} from './sydneyLib/sydneyDom.js';

__sS(
    {
        nameTag:'_social_style_largeIcons',
        style:{
            minHeight:'50px',
            minWidth:'50px',
            maxHeight:'50px',
            maxWidth:'50px',
            cursor:'pointer',
            // borderRadius:'50%',
            
        }
    }
)

__SYD._p2 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    flexDirection:__p(['_p2','_flex'],'row'),
                    transform:'unset',
                    marginBottom:'20px',
                    alignItems:'center',
                    justifyContent:'space-around'
                }
            })//  + __sC['txt_shade1']()
        },
        [
            __c(
                'div',
                {
                    style:`min-height:${__p(['_p2','_flex'],'row') === 'row' ? '400px' : '300px'};width:${__p(['_p2','_flex'],'row') === 'row' ? '400px' : '300px'};background-image:url("./assets/n_logo.png") ;background-size:contain;border-radius:50%;`//url("./assets/goatx.jpg")
                },[],
                {
                    genericStyle:[__p(['_p2','_flex'],'row') === 'row' ? 'bg_cover' : 'bg_fit'],
                }
            ),
            __c(
                'div',
                {
                    style:`min-height:fit-content;height:100%;width:${__p(['_p2','_flex'],'row') === 'row' ? '40%' : '100%'};background:unset;display:flex;justify-content:center;align-items:${__p(['_p2','_flex'],'row') === 'row' ? 'flex-start' : 'center'};flex-direction:column;row-gap:20px`
                },
                [
                    __c('h1',{class:'',style:`font-family:header;font-size:${__p(['_p2','__font'],{1:'60px'})['1']};`+__sC['txt_shade2']()},[__c('span',{style:'font-family:header;'+__sC['txt_shade3']()},["  $HMAX "])]),
                    __SYD.about_text_p2(),
                    // __SYD.page1Socials_large_icons(),
                    __SYD.caBtn()
                ]
            )
        ],
        {
            createState:{
                stateName:'_p2',
                state:{_flex:'row',__font:{1:'60px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{_flex:'column',__font:{1:'45px',2:'17px'}}}],
                defState:{_flex:'row',__font:{1:'60px',2:'20px'}}
            }
        }
    )
}
__SYD.page1SocialBtn_large_icons = ({contentSrc,link = '#'}) =>{
    return __c(
        'div',
        {
            style:__sC._social_style_largeIcons({method:'add',style:{backgroundImage:`url('./assets/${contentSrc}.png')`}}),
            class:'btn_buy'
        },
        [],
        {
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    window.location = link
                }
            }
        }
    )
}
__SYD.caBtn = () =>{
    return __c(
        'div',
        {style:'display:flex;width:100%;max-width:400px;row-gap:10px;align-items:center;text-align:left;height:100px;column-gap:20px;overflow:hidden;'},
        [
            __c(
                'p',
                {
                    style:'font-size:20px;width:max-content;min-width:fit-content;text-align:left'
                },
                [
                    'C.A'
                ]
            ),
            __c(
                'div',
                {
                    style:'min-height:50px;min-width:50px;width:100%;height:fit-content;display:flex;align-items:center;cursor:pointer;background:#fff;border-radius:5px;color:#171717;transform:unset;box-shadow:0px 2px 1px 1px #5a1e0b , 0 0 1px 1px #5a1e0b;',
                },
                [
                    __c(
                        "div",
                        {
                            style:"height:50px;width:calc(100% - 50px);padding:5px;display:flex;align-items:center;"
                        },
                        [
                            __c('p',{style:'font-weight:700;font-size:16px;max-width:100%;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'},['3dqCzpuSCpinzZGdzwq5NxdjJDpCbhVby2NoUzf8moon'])
                        ]
                    ),
                    __c(
                        "div",
                        {
                            style:`min-height:50px;min-width:50px;width:50px;background-color:#FF5722;cursor:pointer;background-size:50%;background-image:url("assets/copy.png");border-radius:inherit;border-top-left-radius:0px;border-bottom-left-radius:0px;`,
                            class:'btn_copy'
                        },[],{genericStyle:['bg_fit'],}
                    )
                ],{
                // {
                    events:{
                        onclick:() =>{
                            navigator.clipboard.writeText('3dqCzpuSCpinzZGdzwq5NxdjJDpCbhVby2NoUzf8moon')
                            alert('contract address copied')
                        }
                    }
                }
            )
        ]
    )
}
__SYD.freeText_def = (text) =>{
    return __c(
        'p',
        {
            style:'font-size:22px;width:50%;min-width:fit-content;text-align:center'
        },
        [
            text
        ]
    )
}
__SYD.freeText_def_small = (text) =>{
    return __c(
        'p',
        {
            style:'font-size:16px;width:100%;text-align:center'
        },
        [
            text
        ]
    )
}

__SYD.about_text_p2 = () =>{
    return __c('p',{style:`font-size:${__p(['_p2','__font'],{2:'20px'})['2']};text-align:left;font-weight:300;width:100%;max-width:400px;text-align:left;font-family:sunrise;word-spacing:6px;`+__sC['txt_shade3']()},[
       "The Next 100x Solana Meme Coin!",
    ])
}
