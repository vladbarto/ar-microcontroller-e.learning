import subprocess

commands = [
    "cd professor-frontend && rm -rf node_modules package-lock.json && npm install --legacy-peer-deps",
    "cd common-backend && mvn clean install",
    "echo 'Setup Done'"
]

# Execute each command sequentially
for cmd in commands:
    print(f"Execute: {cmd}")
    result = subprocess.run(cmd, shell=True)
    print("-" * 40)

