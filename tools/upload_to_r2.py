import os,subprocess
BUCKET="artista-bucket"
FOLDER="upload"
for f in os.listdir(FOLDER):
 p=f"{FOLDER}/{f}"
 if os.path.isfile(p):
  subprocess.run(["wrangler","r2","object","put",f"{BUCKET}/{f}","--file",p])
