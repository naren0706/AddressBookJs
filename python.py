import subprocess

# Define the Git Bash command you want to run
# Replace this with your desired Git Bash command
def function(git_command):
    # Run the Git Bash command
    try:
        result = subprocess.run(git_command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        
        # Check if the command was successful
        if result.returncode == 0:
            print("Command executed successfully:")
            print(result.stdout)
        else:
            print("Command failed with error:")
            print(result.stderr)
    except Exception as e:
        print("An error occurred:", str(e))
        
def createUC(UC,msg):
    function("git checkout -b"+UC)
    function("git add --all :!Python.py")
    function( "git commit -m \" [Narenthra Kishore] Add : "+msg+"\"")
    function("git push origin "+UC)
    function("git checkout main")
    function("git merge "+UC)
    function("git push origin main ")
    return;
        
print("Create UC and push with a commit message and merge it with main ")
UCname=input("Enter the UseCaseName:")
commitmessage=input("Enter the commit message :")
createUC(UCname,commitmessage)