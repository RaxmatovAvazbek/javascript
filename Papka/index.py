import subprocess

data = subprocess.check_output(['netsh', 'wlan','show','profile']).decpde('')
profiles = [i.split(":")[1][1:-1] for i in data if "All user profiles" in i]

for i in profiles:
    results = subprocess.check_output(['netsh', 'wlan', 'show', 'profile'])