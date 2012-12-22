# procstat-json#

*procstat-json* gathers various statistics from /proc filesystem and provides JSON-like output (in real-time).

Current implementation includes:

* **CPU** */proc/stat*
* **Memory** */proc/meminfo*
* **Network** */proc/net/dev*

## Install
There are a few different ways you can install procstat-json:

* Download the [zipfile](https://github.com/norus/procstat-json/archive/master.zip) and install it.
* Checkout the source: `git clone git://github.com/norus/procstat-json.git` and install it yourself.

## Getting started
* Install *procstat-json* directory anywhere you want
* Edit *procstat-json* file and customize **port**, **address** etc.
```python
define('address', default='0.0.0.0', type=str, help='Listen on interface')
define('port', default=8080, type=int, help='Listen on port')
define('pidfile', default='/var/run/procstat-json.pid', type=str, help='PID location')
define('logfile', default=os.path.join(cwd, 'procstat-json.log'), type=str, help='Log file')
define('netdev', default='eth0', type=str, help='Device to query')
define('pollint', default=1000, type=int, help='Polling interval')
```

* Start the daemon:<br />
`./procstat-json start`<br />
`Staring tornado...`<br />

## Examples
*All examples assume you have *procstat-json* running on localhost and listening on port 8080!*

`http://127.0.0.1:8080/stats/1`<br />
`http://127.0.0.1:8080/stats/2`<br />

