let printHelp = ()=>{
    let welNote = ` 
    ---------------------------------------------------------------------------------------------------
    #  peppyfoo is file organiser project                                          
    ---------------------------------------------------------------------------------------------------
    commands :  
                -   birdview < __folder path >  
                    to see a birdview (i.e Tree like structure) of the provided directory.
                    
                -   organise < __folder path >  
                    to organise the folder into a structured directory.
                                  |-organised --
                                                |-  Videos
                                                |-  Photos
                                                |-  Docs
                                                |-  Archives
                                                |-  Others

    ---------------------------------------------------------------------------------------------------
    happy peppy foo ...
    ---------------------------------------------------------------------------------------------------



    `;

    console.log(welNote);
}


module.exports = printHelp ;