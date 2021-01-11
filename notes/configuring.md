### Initialize 
```$tsc --init```
- creates a tsconfig.json file

### Setting "outDir" in tsconfig
- tells typescript where the created files should be stored
- for example, if you put typescript files in a src folder, but set outDir to ```"outdir": "./dist"``` the javascript files will appear there

### Setting "rootDir"
- Set it to the folder to look for typescript files
```"rootDir": "./src",``` 
- the file structure within the "src" folder will be mirrored in the "dist" folder, but with javascript files.

### "noEmitOnError"
- If set to ```"noEmitOnError": true ``` then it will not emit a javascript file on compilation if there is an error in the typeScript file

### "strict"
- Setting to ```"strict": true,``` will set all the options to true;
- ```"noImplicitAny": true,``` ensures that we have to be clear about our parameters
- ```"strictNullChecks": true, ``` tells typeScript to be strict with how you access values that may hold a null value
    - if you know for certainty that it isn't null, you can use an ```!``` at the end of that line of code.

### Code Quality Options
- ```"noUnusedLocals": true,``` lets you know when you have an unused variable
- ```"noUnusedParameters": true,``` lets you know when you have an unused parameter
- ```"noImplicitReturns": true, ``` lets you know when you have a function that sometimes returns something and sometimes it doesn't
   - an example of this:
   ```
   function add(n1: number, n2: number) {
     if (n1 + n2 > 0) {
       return n1 + n2;
     }
   }
   ```
   - if it's less than 0, it returns nothing, which will not be allowed under this setting.
   - it will be ok with a function that NEVER returns anything.  It's only an error if it's sometimes.
