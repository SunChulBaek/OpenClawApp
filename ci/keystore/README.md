CI keystore handling

Place a keystore file and create a keystore.properties with the following keys:

storeFile=ci/keystore/mykeystore.jks
storePassword=*****
keyAlias=key
keyPassword=*****

In CI, set the keystore file as a secret or artifact and create keystore.properties from secrets.
