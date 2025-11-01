## Setup project
1. Initialize project using npm by issuing a command

    `npm init -y`

2. Install Typescript and save as dev dependency

    `npm install typescript ts-node @types/node --save-dev`

3. Initialize Typescript

    `npx tsc --init`

4. Make the tscofnig
    
        {
            "compilerOptions": {
                "target": "ES2020",               
                "module": "CommonJS",             
                "rootDir": "src",                 
                "outDir": "dist",                 
                "strict": true,                   
                "esModuleInterop": true,          
                "skipLibCheck": true,             
                "forceConsistentCasingInFileNames": true
            }
        }    
    
