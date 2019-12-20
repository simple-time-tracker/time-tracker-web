#/bin/sh
sed -i 's|<div id="env-var-config-placeholder" style="visibility:hidden;">|<script src="/env-config.js"></script>|g' index.html
