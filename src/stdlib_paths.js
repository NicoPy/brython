;(function($B){

$B.stdlib = {}
var js=['__random','_ajax','_browser','_html','_io','_jsre','_multiprocessing','_os','_posixsubprocess','_svg','_sys','_timer','_websocket','aes','builtins','dis','hashlib','hmac-md5','hmac-ripemd160','hmac-sha1','hmac-sha224','hmac-sha256','hmac-sha3','hmac-sha384','hmac-sha512','javascript','json','marshal','math','md5','modulefinder','pbkdf2','rabbit','rabbit-legacy','rc4','ripemd160','sha1','sha224','sha256','sha3','sha384','sha512','time','tripledes']
for(var i=0;i<js.length;i++) $B.stdlib[js[i]]=['js']

var pylist=['VFS_import','_abcoll','_codecs','_collections','_csv','_dummy_thread','_functools','_imp','_io','_markupbase','_random','_socket','_sre','_string','_strptime','_struct','_sysconfigdata','_testcapi','_thread','_threading_local','_warnings','_weakref','_weakrefset','abc','antigravity','atexit','base64','binascii','bisect','browser.ajax','browser.html','browser.indexed_db','browser.local_storage','browser.markdown','browser.object_storage','browser.session_storage','browser.svg','browser.timer','browser.websocket','calendar','codecs','collections.abc','colorsys','configparser','contextlib','copy','copyreg','csv','datetime','decimal','difflib','encodings.aliases','encodings.utf_8','errno','external_import','fnmatch','formatter','fractions','functools','gc','genericpath','getopt','heapq','html.entities','html.parser','http.cookies','imp','importlib._bootstrap','importlib.abc','importlib.machinery','importlib.util','inspect','io','itertools','keyword','linecache','locale','logging.config','logging.handlers','markdown2','multiprocessing.dummy.connection','multiprocessing.pool','multiprocessing.process','multiprocessing.util','numbers','operator','optparse','os','pickle','platform','posix','posixpath','pprint','pwd','pydoc','pydoc_data.topics','pyre','queue','random','re','reprlib','select','shutil','signal','site','site-packages.pygame.Rect','site-packages.pygame.Surface','site-packages.pygame.display','site-packages.pygame.draw','site-packages.pygame.event','site-packages.pygame.font','site-packages.pygame.image','site-packages.pygame.time','site-packages.test_sp','site-packages.turtle','site-packages.zipfile','socket','sre_compile','sre_constants','sre_parse','stat','string','struct','subprocess','sys','sysconfig','tarfile','tempfile','test.pystone','test.re_tests','test.regrtest','test.support','test.test_int','test.test_re','textwrap','this','threading','token','tokenize','traceback','types','ui.dialog','ui.progressbar','ui.slider','ui.widget','unittest.__main__','unittest.case','unittest.loader','unittest.main','unittest.mock','unittest.result','unittest.runner','unittest.signals','unittest.suite','unittest.test._test_warnings','unittest.test.dummy','unittest.test.support','unittest.test.test_assertions','unittest.test.test_break','unittest.test.test_case','unittest.test.test_discovery','unittest.test.test_functiontestcase','unittest.test.test_loader','unittest.test.test_program','unittest.test.test_result','unittest.test.test_runner','unittest.test.test_setups','unittest.test.test_skipping','unittest.test.test_suite','unittest.test.testmock.support','unittest.test.testmock.testcallable','unittest.test.testmock.testhelpers','unittest.test.testmock.testmagicmethods','unittest.test.testmock.testmock','unittest.test.testmock.testpatch','unittest.test.testmock.testsentinel','unittest.test.testmock.testwith','unittest.util','urllib.parse','urllib.request','warnings','weakref','webbrowser','xml.dom.NodeFilter','xml.dom.domreg','xml.dom.expatbuilder','xml.dom.minicompat','xml.dom.minidom','xml.dom.pulldom','xml.dom.xmlbuilder','xml.etree.ElementInclude','xml.etree.ElementPath','xml.etree.ElementTree','xml.etree.cElementTree','xml.parsers.expat','xml.sax._exceptions','xml.sax.expatreader','xml.sax.handler','xml.sax.saxutils','xml.sax.xmlreader','zipfile']
for(var i=0;i<pylist.length;i++) $B.stdlib[pylist[i]]=['py']

var pkglist=['browser','collections','encodings','html','http','importlib','logging','multiprocessing','multiprocessing.dummy','pydoc_data','site-packages.pygame','test','ui','unittest','unittest.test','unittest.test.testmock','urllib','xml','xml.dom','xml.etree','xml.parsers','xml.sax']
for(var i=0;i<pkglist.length;i++) $B.stdlib[pkglist[i]]=['py',true]
})(__BRYTHON__)