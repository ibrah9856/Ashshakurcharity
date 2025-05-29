const NOVASTART=()=>{

   ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

        DISPLAY("",`

        <header>

            <img class="CompanyLogo" src="https://ibrah9856.github.io/Ashshakurcharity/Assets/logo.jpg">
        
            <p class='CompanyName'>Ash Shakur Charity and Orphanage Aid</p>

            <img id='MenuOpen' onclick='MENUOPEN()' class="RightIcon" src="${WHITEMENUICON}"/>

            <img id='MenuClose' onclick='MENUCLOSE()' class="RightIcon" src="${WHITECLOSEICON}"/>

        </header>

        <img class="CompanyLogo" src="https://ibrah9856.github.io/Ashshakurcharity/Assets/logo.jpg">

        
        
    `)

};