
# Enterprise Linux Gateway & Squid Proxy Traffic Steering Architecture

## 📌 Overview
A hands-on implementation of an enterprise Linux Network Security Gateway utilizing **Squid Proxy**, custom **PAC file traffic steering**, and **IPTables NAT routing**. This lab demonstrates how to control outbound web access, enforce domain filtering ACLs, and analyze proxy traffic logs using Linux CLI tools.

---

## 🛠️ Key Components & Implementation

### 1. Network Routing & Gateway Config
- Dual-interface Linux Server acting as the perimeter gateway.
- Configured IPv4 forwarding and `iptables` Source NAT (SNAT/MASQUERADE) for internal subnet client isolation.

### 2. Squid Proxy Configuration & Access Control
- Deployed Squid Web Proxy to manage client HTTP/HTTPS requests.
- Defined custom domain and subnet ACLs in `squid.conf`:
  - Allowed traffic strictly from verified internal subnets.
  - Enforced domain-blocking rules (`dstdomain` ACLs) for unauthorized external sites.

### 3. Traffic Steering via PAC Script
- Developed a lightweight JavaScript PAC file:
  - Direct bypass for local LAN and localhost interfaces.
  - Forwarded external web requests to the Squid Gateway (`3128`) with fallback fail-open logic.

### 4. Monitoring & Troubleshooting CLI
- Streamed real-time connection events using `tail -f /var/log/squid/access.log`.
- Conducted raw packet inspection using `tcpdump` to verify port redirection and client connection handshakes.

---

## 🛠️ Technical Skills Highlighted
`Linux Administration (Ubuntu/CentOS)` | `Squid Proxy` | `IPTables / NAT` | `PAC File Scripting` | `Network Diagnostics (tcpdump, ss, netstat)` | `Log Analysis (grep, awk)`
