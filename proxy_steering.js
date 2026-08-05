function FindProxyForURL(url, host) {

    // 1. Standardize host formatting
    host = host.toLowerCase();

    // 2. Bypass Proxy for Localhost and Plain Internal Hostnames (e.g., http://intranet/)
    if (isPlainHostName(host) || 
        shExpMatch(host, "localhost") || 
        shExpMatch(host, "127.0.0.1")) {
        return "DIRECT";
    }

    // 3. Bypass Proxy for Private Corporate Subnets (RFC 1918)
    var resolvedIP = dnsResolve(host);
    if (resolvedIP) {
        if (isInNet(resolvedIP, "10.0.0.0", "255.0.0.0") ||
            isInNet(resolvedIP, "172.16.0.0", "255.240.0.0") ||
            isInNet(resolvedIP, "192.168.0.0", "255.255.0.0")) {
            return "DIRECT";
        }
    }

    // 4. Send all public web traffic through the Linux Squid Security Gateway
    // Primary: Your Squid Proxy Server IP on Port 3128
    // Fallback: DIRECT (allows browsing if Squid server goes down)
    return "PROXY 192.168.1.100:3128; DIRECT";
}
