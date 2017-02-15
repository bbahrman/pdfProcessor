for /f "delims=|" %%f in ('dir /b .\') do pdftk A="C:\Users\bensh\ToCollate\%%f" cat A2-end output ".\processed\%%f"
