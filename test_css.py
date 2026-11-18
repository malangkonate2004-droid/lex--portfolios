import subprocess, time, urllib.request, re, os

proc = subprocess.Popen(['npm.cmd', 'run', 'dev'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
time.sleep(10)

try:
    req = urllib.request.Request('http://127.0.0.1:3000', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=5) as res:
        html = res.read().decode('utf-8')
    print('HTML fetched, length:', len(html))
    css_links = re.findall(r'href="(/_next/[^"]+\.css[^"]*)"', html)
    print('Found CSS links:', css_links)
    for link in css_links:
        css_url = 'http://127.0.0.1:3000' + link
        with urllib.request.urlopen(urllib.request.Request(css_url, headers={'User-Agent': 'Mozilla/5.0'})) as c_res:
            css = c_res.read().decode('utf-8')
        print(f'CSS URL: {css_url}')
        print(f'CSS length: {len(css)} bytes')
        print('Contains .flex:', '.flex' in css)
        print('Contains .text-:', '.text-' in css)
        print('Contains .bg-:', '.bg-' in css)
        print('Sample utility classes found:')
        classes = sorted(list(set(re.findall(r'\.(?:flex|grid|text-[a-z0-9-]+|bg-[a-z0-9-]+)', css))))
        for match in classes[:15]:
            print('  ', match)
except Exception as e:
    print('Error:', e)
finally:
    proc.terminate()
    try:
        out, _ = proc.communicate(timeout=3)
        print("Server log:\n", out[-1000:] if len(out) > 1000 else out)
    except Exception as ex:
        proc.kill()
