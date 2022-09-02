/* eslint-disable indent */
/* eslint-disable max-len */
/**
 * to print ascii art
 */
function printAsciiArt() {
  console.log();
  const taskManagerAsciiArt = String.raw`
   ______              __                          
  /_  __/____ _ _____ / /__                        
   / /  / __ '// ___// //_/                        
  / /  / /_/ /(__  )/ ,<                           
 /_/   \__,_//____//_/|_|                          
     __  ___                                       
    /  |/  /____ _ ____   ____ _ ____ _ ___   _____
   / /|_/ // __ '// __ \ / __ '// __ '// _ \ / ___/
  / /  / // /_/ // / / // /_/ // /_/ //  __// /    
 /_/  /_/ \__,_//_/ /_/ \__,_/ \__, / \___//_/     
                              /____/               
  `;
  console.log(taskManagerAsciiArt);
  console.log();
}

module.exports = printAsciiArt;
