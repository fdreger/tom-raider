<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.12.2" name="egypt-16" tilewidth="16" tileheight="16" tilecount="378" columns="21">
 <image source="egypt.png" width="340" height="288"/>
 <tile id="64" type="Bomb"/>
 <tile id="65" type="Crate"/>
 <tile id="131" type="Switch">
  <properties>
   <property name="target" type="object" value="0"/>
  </properties>
 </tile>
 <tile id="132" type="Switch"/>
 <tile id="254" type="Door"/>
 <tile id="255" type="Door">
  <properties>
   <property name="_open" type="bool" value="false"/>
  </properties>
 </tile>
</tileset>
