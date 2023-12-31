#!/usr/bin/python3
import sys
from etcdgetpy import etcdget as get
from etcddellocal import etcddel as dellocal 

def delbroadcastlocal(*args):
 knowns=[]
 knowninfo=get('known','--prefix')
 for k in knowninfo:
  dellocal(k[1],args[0],args[1])

if __name__=='__main__':
 delbroadcastlocal(*sys.argv[1:])
