# Jabari "Bari" Lucien — NSM-Barii

Self-taught wireless security researcher and tool developer. I started by building passive monitors to map what's broadcasting in any given environment — BLE scanners, WiFi monitors that detect deauth attacks and RF jamming in real time, wardriving rigs running headless on a Raspberry Pi. That curiosity scaled up into country-wide IP scanning and infrastructure enumeration, and eventually into hands-on IoT vulnerability research — buying consumer devices, auditing them, and disclosing what I find.

That work produced **CVE-2025-15474** — a BLE smart lock that accepts unlimited unauthenticated connections and can be locked out by anyone within range, indefinitely. MITRE assigned.

All tools are self-built in Python, named after Star Wars characters. C++ for embedded work on ESP32/ESP8266 where Python isn't an option.

I also run a cybersecurity content platform across YouTube and Instagram (@NSM_Barii) — tool demos, research walkthroughs, and security explainers.

---

## Tools

| Project | Description | Stars |
|---|---|---|
| [flock-back](https://github.com/NSM-Barii/flock-back) | Wardriving tool for detecting ALPR surveillance cameras via BLE/WiFi | ★ 70 |
| [NetCracker](https://github.com/NSM-Barii/NetCracker) | WiFi hacking suite | ★ 50 |
| [Vader](https://github.com/NSM-Barii/Vader) | Mass IP scanner using BloomFilters across entire countries and ASNs | ★ 20 |
| [Bluehound](https://github.com/NSM-Barii/Bluehound) | BLE recon and anomaly detection in C++ | ★ 18 |
| [Dooku](https://github.com/NSM-Barii/Dooku) | Portable wardriving rig — Pi 5, 4x ALFA adapters, live dashboard | ★ 17 |
| [Yoda](https://github.com/NSM-Barii/Yoda) | Passive RF home monitor with deauth and jamming detection | ★ 15 |
| [Maul](https://github.com/NSM-Barii/Maul) | Infrastructure enumeration — PTR records, SSL certs, port scanning. Pairs with Vader | ★ 5 |

## Research

| Repo | Finding |
|---|---|
| [CVE-2025-15474](https://github.com/NSM-Barii/CVE-2025-15474) | BLE smart lock DoS via unauthenticated connection flooding |
| [ble-smartlock-bypass-dos](https://github.com/NSM-Barii/ble-smartlock-bypass-dos) | Auth bypass on consumer BLE smart locks |
| [ble-smartplug-improper-access-control](https://github.com/NSM-Barii/ble-smartplug-improper-access-control) | Unauthorized device control without pairing |
| [ip-camera-exposed-telnet](https://github.com/NSM-Barii/ip-camera-exposed-telnet) | BusyBox Telnet exposed on consumer IP camera |
| [router_tp_link](https://github.com/NSM-Barii/router_tp_link) | 802.11 IE mutation fuzzing on TP-Link Archer AX1450 |

---

## Contact

jabarilucien@proton.me
