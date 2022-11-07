<h2 class="code-line" data-line-start=0 data-line-end=1 ><a id="Correr_proyecto_0"></a>Correr proyecto</h2>
<p class="has-line-data" data-line-start="1" data-line-end="2">Para correr proyecto de manera local:</p>
<pre><code class="has-line-data" data-line-start="4" data-line-end="9" class="language-sh">$ git <span class="hljs-built_in">clone</span> https://github.com/stcrozzoli/master_race.git
$ <span class="hljs-built_in">cd</span> masterrace
$ npm install
$ npm start
</code></pre>
<p class="has-line-data" data-line-start="10" data-line-end="12">Es importante contar con Firestore Database (Firebase) junto con la siguiente coleccion y documentos:<br>
Coleccion: ‘productos’</p>
<p class="has-line-data" data-line-start="13" data-line-end="22">Docs:<br>
{<br>
category&quot;&quot;,<br>
descripcion:&quot;&quot;,<br>
img:&quot;&quot;,<br>
precio: number,<br>
stock: number,<br>
titulo: “”,<br>
}</p>