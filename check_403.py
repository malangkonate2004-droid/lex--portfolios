import urllib.request, urllib.error

try:
    req = urllib.request.Request('http://localhost:3000', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as res:
        print(res.status)
except urllib.error.HTTPError as e:
    print('HTTPError code:', e.code)
    print('HTTPError body:', e.read().decode('utf-8', errors='ignore')[:300])
except Exception as e:
    print('Other error:', e)
