import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  NO_ERRORS_SCHEMA,
  NgModule,
  Output,
  ViewChild,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵresolveWindow,
  ɵɵviewQuery
} from "./chunk-JJOZ5A5Q.js";
import {
  require_blockly_compressed,
  require_core_browser,
  require_en,
  require_javascript
} from "./chunk-AGN5AR43.js";
import {
  __commonJS,
  __spreadValues,
  __toESM
} from "./chunk-TXDUYLVM.js";

// node_modules/blockly/dart_compressed.js
var require_dart_compressed = __commonJS({
  "node_modules/blockly/dart_compressed.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(["./blockly_compressed.js"], factory);
      } else if (typeof exports === "object") {
        module.exports = factory(require_blockly_compressed());
      } else {
        var factoryExports = factory(root.Blockly);
        root.Blockly.Dart = factoryExports.dartGenerator;
        root.Blockly.Dart.__namespace__ = factoryExports.__namespace__;
      }
    })(exports, function(__parent__) {
      var $ = __parent__.__namespace__;
      var module$exports$Blockly$Dart = {}, module$contents$Blockly$Dart_Variables = $.module$build$src$core$variables, module$contents$Blockly$Dart_stringUtils = $.module$build$src$core$utils$string, module$contents$Blockly$Dart_CodeGenerator = $.CodeGenerator$$module$build$src$core$generator, module$contents$Blockly$Dart_Names = $.module$build$src$core$names.Names, module$contents$Blockly$Dart_NameType = $.NameType$$module$build$src$core$names, module$contents$Blockly$Dart_inputTypes = $.module$build$src$core$input_types.inputTypes;
      module$exports$Blockly$Dart.dartGenerator = new $.CodeGenerator$$module$build$src$core$generator("Dart");
      module$exports$Blockly$Dart.dartGenerator.addReservedWords("assert,break,case,catch,class,const,continue,default,do,else,enum,extends,false,final,finally,for,if,in,is,new,null,rethrow,return,super,switch,this,throw,true,try,var,void,while,with,print,identityHashCode,identical,BidirectionalIterator,Comparable,double,Function,int,Invocation,Iterable,Iterator,List,Map,Match,num,Pattern,RegExp,Set,StackTrace,String,StringSink,Type,bool,DateTime,Deprecated,Duration,Expando,Null,Object,RuneIterator,Runes,Stopwatch,StringBuffer,Symbol,Uri,Comparator,AbstractClassInstantiationError,ArgumentError,AssertionError,CastError,ConcurrentModificationError,CyclicInitializationError,Error,Exception,FallThroughError,FormatException,IntegerDivisionByZeroException,NoSuchMethodError,NullThrownError,OutOfMemoryError,RangeError,StackOverflowError,StateError,TypeError,UnimplementedError,UnsupportedError");
      module$exports$Blockly$Dart.dartGenerator.ORDER_ATOMIC = 0;
      module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX = 1;
      module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_PREFIX = 2;
      module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE = 3;
      module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE = 4;
      module$exports$Blockly$Dart.dartGenerator.ORDER_SHIFT = 5;
      module$exports$Blockly$Dart.dartGenerator.ORDER_BITWISE_AND = 6;
      module$exports$Blockly$Dart.dartGenerator.ORDER_BITWISE_XOR = 7;
      module$exports$Blockly$Dart.dartGenerator.ORDER_BITWISE_OR = 8;
      module$exports$Blockly$Dart.dartGenerator.ORDER_RELATIONAL = 9;
      module$exports$Blockly$Dart.dartGenerator.ORDER_EQUALITY = 10;
      module$exports$Blockly$Dart.dartGenerator.ORDER_LOGICAL_AND = 11;
      module$exports$Blockly$Dart.dartGenerator.ORDER_LOGICAL_OR = 12;
      module$exports$Blockly$Dart.dartGenerator.ORDER_IF_NULL = 13;
      module$exports$Blockly$Dart.dartGenerator.ORDER_CONDITIONAL = 14;
      module$exports$Blockly$Dart.dartGenerator.ORDER_CASCADE = 15;
      module$exports$Blockly$Dart.dartGenerator.ORDER_ASSIGNMENT = 16;
      module$exports$Blockly$Dart.dartGenerator.ORDER_NONE = 99;
      module$exports$Blockly$Dart.dartGenerator.isInitialized = false;
      module$exports$Blockly$Dart.dartGenerator.init = function(a) {
        Object.getPrototypeOf(this).init.call(this);
        this.nameDB_ ? this.nameDB_.reset() : this.nameDB_ = new $.module$build$src$core$names.Names(this.RESERVED_WORDS_);
        this.nameDB_.setVariableMap(a.getVariableMap());
        this.nameDB_.populateVariables(a);
        this.nameDB_.populateProcedures(a);
        const b = [];
        var c = $.module$build$src$core$variables.allDeveloperVariables(a);
        for (let d = 0; d < c.length; d++) b.push(this.nameDB_.getName(c[d], $.NameType$$module$build$src$core$names.DEVELOPER_VARIABLE));
        a = $.module$build$src$core$variables.allUsedVarModels(a);
        for (c = 0; c < a.length; c++) b.push(this.nameDB_.getName(a[c].getId(), $.NameType$$module$build$src$core$names.VARIABLE));
        b.length && (this.definitions_.variables = "var " + b.join(", ") + ";");
        this.isInitialized = true;
      };
      module$exports$Blockly$Dart.dartGenerator.finish = function(a) {
        a && (a = this.prefixLines(a, this.INDENT));
        a = "main() {\n" + a + "}";
        const b = [], c = [];
        for (let d in this.definitions_) {
          const e = this.definitions_[d];
          e.match(/^import\s/) ? b.push(e) : c.push(e);
        }
        a = Object.getPrototypeOf(this).finish.call(this, a);
        this.isInitialized = false;
        this.nameDB_.reset();
        return (b.join("\n") + "\n\n" + c.join("\n\n")).replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n\n\n") + a;
      };
      module$exports$Blockly$Dart.dartGenerator.scrubNakedValue = function(a) {
        return a + ";\n";
      };
      module$exports$Blockly$Dart.dartGenerator.quote_ = function(a) {
        a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/\$/g, "\\$").replace(/'/g, "\\'");
        return "'" + a + "'";
      };
      module$exports$Blockly$Dart.dartGenerator.multiline_quote_ = function(a) {
        return a.split(/\n/g).map(this.quote_).join(" + '\\n' + \n");
      };
      module$exports$Blockly$Dart.dartGenerator.scrub_ = function(a, b, c) {
        let d = "";
        if (!a.outputConnection || !a.outputConnection.targetConnection) {
          var e = a.getCommentText();
          e && (e = $.module$build$src$core$utils$string.wrap(e, this.COMMENT_WRAP - 3), d = a.getProcedureDef ? d + this.prefixLines(e + "\n", "/// ") : d + this.prefixLines(e + "\n", "// "));
          for (let f = 0; f < a.inputList.length; f++) a.inputList[f].type === $.module$build$src$core$input_types.inputTypes.VALUE && (e = a.inputList[f].connection.targetBlock()) && (e = this.allNestedComments(e)) && (d += this.prefixLines(e, "// "));
        }
        a = a.nextConnection && a.nextConnection.targetBlock();
        c = c ? "" : this.blockToCode(a);
        return d + b + c;
      };
      module$exports$Blockly$Dart.dartGenerator.getAdjusted = function(a, b, c, d, e) {
        c = c || 0;
        e = e || this.ORDER_NONE;
        a.workspace.options.oneBasedIndex && c--;
        const f = a.workspace.options.oneBasedIndex ? "1" : "0";
        let g, h;
        c ? h = g = this.ORDER_ADDITIVE : d ? h = g = this.ORDER_UNARY_PREFIX : g = e;
        a = this.valueToCode(a, b, g) || f;
        $.module$build$src$core$utils$string.isNumber(a) ? (a = parseInt(a, 10) + c, d && (a = -a)) : (0 < c ? a = a + " + " + c : 0 > c && (a = a + " - " + -c), d && (a = c ? "-(" + a + ")" : "-" + a), h = Math.floor(h), e = Math.floor(e), h && e >= h && (a = "(" + a + ")"));
        return a;
      };
      var module$exports$Blockly$Dart$colour = {};
      module$exports$Blockly$Dart.dartGenerator.addReservedWords("Math");
      module$exports$Blockly$Dart.dartGenerator.colour_picker = function(a) {
        return [module$exports$Blockly$Dart.dartGenerator.quote_(a.getFieldValue("COLOUR")), module$exports$Blockly$Dart.dartGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Dart.dartGenerator.colour_random = function(a) {
        module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
        return [module$exports$Blockly$Dart.dartGenerator.provideFunction_("colour_random", `
String ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}() {
  String hex = '0123456789abcdef';
  var rnd = new Math.Random();
  return '#\${hex[rnd.nextInt(16)]}\${hex[rnd.nextInt(16)]}'
      '\${hex[rnd.nextInt(16)]}\${hex[rnd.nextInt(16)]}'
      '\${hex[rnd.nextInt(16)]}\${hex[rnd.nextInt(16)]}';
}
`) + "()", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.colour_rgb = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "RED", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || 0, c = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "GREEN", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || 0;
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "BLUE", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || 0;
        module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
        return [module$exports$Blockly$Dart.dartGenerator.provideFunction_("colour_rgb", `
String ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(num r, num g, num b) {
  num rn = (Math.max(Math.min(r, 100), 0) * 2.55).round();
  String rs = rn.toInt().toRadixString(16);
  rs = '0$rs';
  rs = rs.substring(rs.length - 2);
  num gn = (Math.max(Math.min(g, 100), 0) * 2.55).round();
  String gs = gn.toInt().toRadixString(16);
  gs = '0$gs';
  gs = gs.substring(gs.length - 2);
  num bn = (Math.max(Math.min(b, 100), 0) * 2.55).round();
  String bs = bn.toInt().toRadixString(16);
  bs = '0$bs';
  bs = bs.substring(bs.length - 2);
  return '#$rs$gs$bs';
}
`) + "(" + b + ", " + c + ", " + a + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.colour_blend = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "COLOUR1", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "'#000000'", c = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "COLOUR2", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "'#000000'";
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "RATIO", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || 0.5;
        module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
        return [module$exports$Blockly$Dart.dartGenerator.provideFunction_("colour_blend", `
String ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(String c1, String c2, num ratio) {
  ratio = Math.max(Math.min(ratio, 1), 0);
  int r1 = int.parse('0x\${c1.substring(1, 3)}');
  int g1 = int.parse('0x\${c1.substring(3, 5)}');
  int b1 = int.parse('0x\${c1.substring(5, 7)}');
  int r2 = int.parse('0x\${c2.substring(1, 3)}');
  int g2 = int.parse('0x\${c2.substring(3, 5)}');
  int b2 = int.parse('0x\${c2.substring(5, 7)}');
  num rn = (r1 * (1 - ratio) + r2 * ratio).round();
  String rs = rn.toInt().toRadixString(16);
  num gn = (g1 * (1 - ratio) + g2 * ratio).round();
  String gs = gn.toInt().toRadixString(16);
  num bn = (b1 * (1 - ratio) + b2 * ratio).round();
  String bs = bn.toInt().toRadixString(16);
  rs = '0$rs';
  rs = rs.substring(rs.length - 2);
  gs = '0$gs';
  gs = gs.substring(gs.length - 2);
  bs = '0$bs';
  bs = bs.substring(bs.length - 2);
  return '#$rs$gs$bs';
}
`) + "(" + b + ", " + c + ", " + a + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      var module$exports$Blockly$Dart$lists = {}, module$contents$Blockly$Dart$lists_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Dart.dartGenerator.addReservedWords("Math");
      module$exports$Blockly$Dart.dartGenerator.lists_create_empty = function(a) {
        return ["[]", module$exports$Blockly$Dart.dartGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Dart.dartGenerator.lists_create_with = function(a) {
        const b = Array(a.itemCount_);
        for (let c = 0; c < a.itemCount_; c++) b[c] = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "ADD" + c, module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "null";
        return ["[" + b.join(", ") + "]", module$exports$Blockly$Dart.dartGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Dart.dartGenerator.lists_repeat = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "ITEM", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "null";
        return ["new List.filled(" + (module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "NUM", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "0") + ", " + b + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.lists_length = function(a) {
        return [(module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) || "[]") + ".length", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.lists_isEmpty = function(a) {
        return [(module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) || "[]") + ".isEmpty", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.lists_indexOf = function(a) {
        var b = "FIRST" === a.getFieldValue("END") ? "indexOf" : "lastIndexOf";
        const c = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "FIND", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "''";
        b = (module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) || "[]") + "." + b + "(" + c + ")";
        return a.workspace.options.oneBasedIndex ? [b + " + 1", module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE] : [b, module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.lists_getIndex = function(a) {
        function b() {
          const f = module$exports$Blockly$Dart.dartGenerator.nameDB_.getDistinctName("tmp_list", $.NameType$$module$build$src$core$names.VARIABLE), g = "List " + f + " = " + e + ";\n";
          e = f;
          return g;
        }
        var c = a.getFieldValue("MODE") || "GET";
        const d = a.getFieldValue("WHERE") || "FROM_START";
        let e = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "VALUE", "RANDOM" === d || "FROM_END" === d ? module$exports$Blockly$Dart.dartGenerator.ORDER_NONE : module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) || "[]";
        if (("RANDOM" !== d || "REMOVE" !== c) && "FROM_END" !== d || e.match(/^\w+$/)) switch (d) {
          case "FIRST":
            if ("GET" === c) return [e + ".first", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
            if ("GET_REMOVE" === c) return [e + ".removeAt(0)", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
            if ("REMOVE" === c) return e + ".removeAt(0);\n";
            break;
          case "LAST":
            if ("GET" === c) return [e + ".last", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
            if ("GET_REMOVE" === c) return [e + ".removeLast()", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
            if ("REMOVE" === c) return e + ".removeLast();\n";
            break;
          case "FROM_START":
            a = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT");
            if ("GET" === c) return [e + "[" + a + "]", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
            if ("GET_REMOVE" === c) return [e + ".removeAt(" + a + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
            if ("REMOVE" === c) return e + ".removeAt(" + a + ");\n";
            break;
          case "FROM_END":
            a = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT", 1, false, module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE);
            if ("GET" === c) return [e + "[" + e + ".length - " + a + "]", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
            if ("GET_REMOVE" === c || "REMOVE" === c) {
              a = e + ".removeAt(" + e + ".length - " + a + ")";
              if ("GET_REMOVE" === c) return [a, module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
              if ("REMOVE" === c) return a + ";\n";
            }
            break;
          case "RANDOM":
            module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
            if ("REMOVE" === c) return c = module$exports$Blockly$Dart.dartGenerator.nameDB_.getDistinctName(
              "tmp_x",
              $.NameType$$module$build$src$core$names.VARIABLE
            ), "int " + c + " = new Math.Random().nextInt(" + e + ".length);\n" + (e + ".removeAt(" + c + ");\n");
            if ("GET" === c) return [module$exports$Blockly$Dart.dartGenerator.provideFunction_("lists_get_random_item", `
dynamic ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List my_list) {
  int x = new Math.Random().nextInt(my_list.length);
  return my_list[x];
}
`) + "(" + e + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
            if ("GET_REMOVE" === c) return [module$exports$Blockly$Dart.dartGenerator.provideFunction_("lists_remove_random_item", `
dynamic ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List my_list) {
  int x = new Math.Random().nextInt(my_list.length);
  return my_list.removeAt(x);
}
`) + "(" + e + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
        }
        else {
          if ("RANDOM" === d) return module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;", c = b(), a = module$exports$Blockly$Dart.dartGenerator.nameDB_.getDistinctName("tmp_x", $.NameType$$module$build$src$core$names.VARIABLE), c + ("int " + a + " = new Math.Random().nextInt(" + e + ".length);\n") + (e + ".removeAt(" + a + ");\n");
          if ("REMOVE" === c) return c = module$exports$Blockly$Dart.dartGenerator.getAdjusted(
            a,
            "AT",
            1,
            false,
            module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE
          ), b() + (e + ".removeAt(" + e + ".length - " + c + ");\n");
          if ("GET" === c) return c = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT", 1), [module$exports$Blockly$Dart.dartGenerator.provideFunction_("lists_get_from_end", `
dynamic ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List my_list, num x) {
  x = my_list.length - x;
  return my_list[x];
}
`) + "(" + e + ", " + c + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
          if ("GET_REMOVE" === c) return c = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT", 1), [module$exports$Blockly$Dart.dartGenerator.provideFunction_("lists_remove_from_end", `
dynamic ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List my_list, num x) {
  x = my_list.length - x;
  return my_list.removeAt(x);
}
`) + "(" + e + ", " + c + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
        }
        throw Error("Unhandled combination (lists_getIndex).");
      };
      module$exports$Blockly$Dart.dartGenerator.lists_setIndex = function(a) {
        function b() {
          if (e.match(/^\w+$/)) return "";
          const g = module$exports$Blockly$Dart.dartGenerator.nameDB_.getDistinctName("tmp_list", $.NameType$$module$build$src$core$names.VARIABLE), h = "List " + g + " = " + e + ";\n";
          e = g;
          return h;
        }
        const c = a.getFieldValue("MODE") || "GET";
        var d = a.getFieldValue("WHERE") || "FROM_START";
        let e = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "LIST", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) || "[]";
        const f = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "TO", module$exports$Blockly$Dart.dartGenerator.ORDER_ASSIGNMENT) || "null";
        switch (d) {
          case "FIRST":
            if ("SET" === c) return e + "[0] = " + f + ";\n";
            if ("INSERT" === c) return e + ".insert(0, " + f + ");\n";
            break;
          case "LAST":
            if ("SET" === c) return b() + (e + "[" + e + ".length - 1] = " + f + ";\n");
            if ("INSERT" === c) return e + ".add(" + f + ");\n";
            break;
          case "FROM_START":
            a = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT");
            if ("SET" === c) return e + "[" + a + "] = " + f + ";\n";
            if ("INSERT" === c) return e + ".insert(" + a + ", " + f + ");\n";
            break;
          case "FROM_END":
            a = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT", 1, false, module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE);
            d = b();
            if ("SET" === c) return d + (e + "[" + e + ".length - " + a + "] = " + f + ";\n");
            if ("INSERT" === c) return d + (e + ".insert(" + e + ".length - " + a + ", " + f + ");\n");
            break;
          case "RANDOM":
            module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
            a = b();
            d = module$exports$Blockly$Dart.dartGenerator.nameDB_.getDistinctName(
              "tmp_x",
              $.NameType$$module$build$src$core$names.VARIABLE
            );
            a += "int " + d + " = new Math.Random().nextInt(" + e + ".length);\n";
            if ("SET" === c) return a + (e + "[" + d + "] = " + f + ";\n");
            if ("INSERT" === c) return a + (e + ".insert(" + d + ", " + f + ");\n");
        }
        throw Error("Unhandled combination (lists_setIndex).");
      };
      module$exports$Blockly$Dart.dartGenerator.lists_getSublist = function(a) {
        var b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "LIST", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) || "[]", c = a.getFieldValue("WHERE1");
        const d = a.getFieldValue("WHERE2");
        if (b.match(/^\w+$/) || "FROM_END" !== c && "FROM_START" === d) {
          switch (c) {
            case "FROM_START":
              c = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT1");
              break;
            case "FROM_END":
              c = module$exports$Blockly$Dart.dartGenerator.getAdjusted(
                a,
                "AT1",
                1,
                false,
                module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE
              );
              c = b + ".length - " + c;
              break;
            case "FIRST":
              c = "0";
              break;
            default:
              throw Error("Unhandled option (lists_getSublist).");
          }
          switch (d) {
            case "FROM_START":
              var e = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT2", 1);
              break;
            case "FROM_END":
              e = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT2", 0, false, module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE);
              e = b + ".length - " + e;
              break;
            case "LAST":
              break;
            default:
              throw Error("Unhandled option (lists_getSublist).");
          }
          b = "LAST" === d ? b + ".sublist(" + c + ")" : b + ".sublist(" + c + ", " + e + ")";
        } else e = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT1"), a = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT2"), b = module$exports$Blockly$Dart.dartGenerator.provideFunction_("lists_get_sublist", `
List ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List list, String where1, num at1, String where2, num at2) {
  int getAt(String where, num at) {
    if (where == 'FROM_END') {
      at = list.length - 1 - at;
    } else if (where == 'FIRST') {
      at = 0;
    } else if (where == 'LAST') {
      at = list.length - 1;
    } else if (where != 'FROM_START') {
      throw 'Unhandled option (lists_getSublist).';
    }
    return at;
  }
  at1 = getAt(where1, at1);
  at2 = getAt(where2, at2) + 1;
  return list.sublist(at1, at2);
}
`) + "(" + b + ", '" + c + "', " + e + ", '" + d + "', " + a + ")";
        return [b, module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.lists_sort = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "LIST", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "[]", c = "1" === a.getFieldValue("DIRECTION") ? 1 : -1;
        a = a.getFieldValue("TYPE");
        return [module$exports$Blockly$Dart.dartGenerator.provideFunction_("lists_sort", `
List ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List list, String type, int direction) {
  var compareFuncs = {
    'NUMERIC': (a, b) => (direction * a.compareTo(b)).toInt(),
    'TEXT': (a, b) => direction * a.toString().compareTo(b.toString()),
    'IGNORE_CASE':
      (a, b) => direction *
      a.toString().toLowerCase().compareTo(b.toString().toLowerCase())
  };
  list = new List.from(list);
  var compare = compareFuncs[type];
  list.sort(compare);
  return list;
}
`) + "(" + b + ', "' + a + '", ' + c + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.lists_split = function(a) {
        let b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "INPUT", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX);
        const c = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "DELIM", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "''";
        a = a.getFieldValue("MODE");
        if ("SPLIT" === a) b || (b = "''"), a = "split";
        else if ("JOIN" === a) b || (b = "[]"), a = "join";
        else throw Error("Unknown mode: " + a);
        return [b + "." + a + "(" + c + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.lists_reverse = function(a) {
        return ["new List.from(" + (module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "LIST", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "[]") + ".reversed)", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      var module$exports$Blockly$Dart$logic = {};
      module$exports$Blockly$Dart.dartGenerator.controls_if = function(a) {
        let b = 0, c = "", d, e;
        module$exports$Blockly$Dart.dartGenerator.STATEMENT_PREFIX && (c += module$exports$Blockly$Dart.dartGenerator.injectId(module$exports$Blockly$Dart.dartGenerator.STATEMENT_PREFIX, a));
        do
          e = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "IF" + b, module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "false", d = module$exports$Blockly$Dart.dartGenerator.statementToCode(a, "DO" + b), module$exports$Blockly$Dart.dartGenerator.STATEMENT_SUFFIX && (d = module$exports$Blockly$Dart.dartGenerator.prefixLines(module$exports$Blockly$Dart.dartGenerator.injectId(module$exports$Blockly$Dart.dartGenerator.STATEMENT_SUFFIX, a), module$exports$Blockly$Dart.dartGenerator.INDENT) + d), c += (0 < b ? "else " : "") + "if (" + e + ") {\n" + d + "}", b++;
        while (a.getInput("IF" + b));
        if (a.getInput("ELSE") || module$exports$Blockly$Dart.dartGenerator.STATEMENT_SUFFIX) d = module$exports$Blockly$Dart.dartGenerator.statementToCode(a, "ELSE"), module$exports$Blockly$Dart.dartGenerator.STATEMENT_SUFFIX && (d = module$exports$Blockly$Dart.dartGenerator.prefixLines(module$exports$Blockly$Dart.dartGenerator.injectId(module$exports$Blockly$Dart.dartGenerator.STATEMENT_SUFFIX, a), module$exports$Blockly$Dart.dartGenerator.INDENT) + d), c += " else {\n" + d + "}";
        return c + "\n";
      };
      module$exports$Blockly$Dart.dartGenerator.controls_ifelse = module$exports$Blockly$Dart.dartGenerator.controls_if;
      module$exports$Blockly$Dart.dartGenerator.logic_compare = function(a) {
        const b = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[a.getFieldValue("OP")], c = "==" === b || "!=" === b ? module$exports$Blockly$Dart.dartGenerator.ORDER_EQUALITY : module$exports$Blockly$Dart.dartGenerator.ORDER_RELATIONAL, d = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "A", c) || "0";
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "B", c) || "0";
        return [d + " " + b + " " + a, c];
      };
      module$exports$Blockly$Dart.dartGenerator.logic_operation = function(a) {
        const b = "AND" === a.getFieldValue("OP") ? "&&" : "||", c = "&&" === b ? module$exports$Blockly$Dart.dartGenerator.ORDER_LOGICAL_AND : module$exports$Blockly$Dart.dartGenerator.ORDER_LOGICAL_OR;
        let d = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "A", c);
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "B", c);
        if (d || a) {
          const e = "&&" === b ? "true" : "false";
          d || (d = e);
          a || (a = e);
        } else a = d = "false";
        return [d + " " + b + " " + a, c];
      };
      module$exports$Blockly$Dart.dartGenerator.logic_negate = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_PREFIX;
        return ["!" + (module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "BOOL", b) || "true"), b];
      };
      module$exports$Blockly$Dart.dartGenerator.logic_boolean = function(a) {
        return ["TRUE" === a.getFieldValue("BOOL") ? "true" : "false", module$exports$Blockly$Dart.dartGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Dart.dartGenerator.logic_null = function(a) {
        return ["null", module$exports$Blockly$Dart.dartGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Dart.dartGenerator.logic_ternary = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "IF", module$exports$Blockly$Dart.dartGenerator.ORDER_CONDITIONAL) || "false", c = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "THEN", module$exports$Blockly$Dart.dartGenerator.ORDER_CONDITIONAL) || "null";
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "ELSE", module$exports$Blockly$Dart.dartGenerator.ORDER_CONDITIONAL) || "null";
        return [b + " ? " + c + " : " + a, module$exports$Blockly$Dart.dartGenerator.ORDER_CONDITIONAL];
      };
      var module$exports$Blockly$Dart$loops = {}, module$contents$Blockly$Dart$loops_stringUtils = $.module$build$src$core$utils$string, module$contents$Blockly$Dart$loops_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Dart.dartGenerator.controls_repeat_ext = function(a) {
        let b;
        b = a.getField("TIMES") ? String(Number(a.getFieldValue("TIMES"))) : module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "TIMES", module$exports$Blockly$Dart.dartGenerator.ORDER_ASSIGNMENT) || "0";
        let c = module$exports$Blockly$Dart.dartGenerator.statementToCode(a, "DO");
        c = module$exports$Blockly$Dart.dartGenerator.addLoopTrap(c, a);
        a = "";
        const d = module$exports$Blockly$Dart.dartGenerator.nameDB_.getDistinctName("count", $.NameType$$module$build$src$core$names.VARIABLE);
        let e = b;
        b.match(/^\w+$/) || $.module$build$src$core$utils$string.isNumber(b) || (e = module$exports$Blockly$Dart.dartGenerator.nameDB_.getDistinctName("repeat_end", $.NameType$$module$build$src$core$names.VARIABLE), a += "var " + e + " = " + b + ";\n");
        return a + ("for (int " + d + " = 0; " + d + " < " + e + "; " + d + "++) {\n" + c + "}\n");
      };
      module$exports$Blockly$Dart.dartGenerator.controls_repeat = module$exports$Blockly$Dart.dartGenerator.controls_repeat_ext;
      module$exports$Blockly$Dart.dartGenerator.controls_whileUntil = function(a) {
        const b = "UNTIL" === a.getFieldValue("MODE");
        let c = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "BOOL", b ? module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_PREFIX : module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "false", d = module$exports$Blockly$Dart.dartGenerator.statementToCode(a, "DO");
        d = module$exports$Blockly$Dart.dartGenerator.addLoopTrap(d, a);
        b && (c = "!" + c);
        return "while (" + c + ") {\n" + d + "}\n";
      };
      module$exports$Blockly$Dart.dartGenerator.controls_for = function(a) {
        var b = module$exports$Blockly$Dart.dartGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE), c = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "FROM", module$exports$Blockly$Dart.dartGenerator.ORDER_ASSIGNMENT) || "0", d = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "TO", module$exports$Blockly$Dart.dartGenerator.ORDER_ASSIGNMENT) || "0";
        const e = module$exports$Blockly$Dart.dartGenerator.valueToCode(
          a,
          "BY",
          module$exports$Blockly$Dart.dartGenerator.ORDER_ASSIGNMENT
        ) || "1";
        let f = module$exports$Blockly$Dart.dartGenerator.statementToCode(a, "DO");
        f = module$exports$Blockly$Dart.dartGenerator.addLoopTrap(f, a);
        if ($.module$build$src$core$utils$string.isNumber(c) && $.module$build$src$core$utils$string.isNumber(d) && $.module$build$src$core$utils$string.isNumber(e)) {
          var g = Number(c) <= Number(d);
          a = "for (" + b + " = " + c + "; " + b + (g ? " <= " : " >= ") + d + "; " + b;
          b = Math.abs(Number(e));
          a = 1 === b ? a + (g ? "++" : "--") : a + ((g ? " += " : " -= ") + b);
          a += ") {\n" + f + "}\n";
        } else a = "", g = c, c.match(/^\w+$/) || $.module$build$src$core$utils$string.isNumber(c) || (g = module$exports$Blockly$Dart.dartGenerator.nameDB_.getDistinctName(b + "_start", $.NameType$$module$build$src$core$names.VARIABLE), a += "var " + g + " = " + c + ";\n"), c = d, d.match(/^\w+$/) || $.module$build$src$core$utils$string.isNumber(d) || (c = module$exports$Blockly$Dart.dartGenerator.nameDB_.getDistinctName(b + "_end", $.NameType$$module$build$src$core$names.VARIABLE), a += "var " + c + " = " + d + ";\n"), d = module$exports$Blockly$Dart.dartGenerator.nameDB_.getDistinctName(b + "_inc", $.NameType$$module$build$src$core$names.VARIABLE), a += "num " + d + " = ", a = $.module$build$src$core$utils$string.isNumber(e) ? a + (Math.abs(e) + ";\n") : a + ("(" + e + ").abs();\n"), a += "if (" + g + " > " + c + ") {\n", a += module$exports$Blockly$Dart.dartGenerator.INDENT + d + " = -" + d + ";\n", a = a + "}\nfor (" + (b + " = " + g + "; " + d + " >= 0 ? " + b + " <= " + c + " : " + b + " >= " + c + "; " + b + " += " + d + ") {\n" + f + "}\n");
        return a;
      };
      module$exports$Blockly$Dart.dartGenerator.controls_forEach = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE), c = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "LIST", module$exports$Blockly$Dart.dartGenerator.ORDER_ASSIGNMENT) || "[]";
        let d = module$exports$Blockly$Dart.dartGenerator.statementToCode(a, "DO");
        d = module$exports$Blockly$Dart.dartGenerator.addLoopTrap(d, a);
        return "for (var " + b + " in " + c + ") {\n" + d + "}\n";
      };
      module$exports$Blockly$Dart.dartGenerator.controls_flow_statements = function(a) {
        let b = "";
        module$exports$Blockly$Dart.dartGenerator.STATEMENT_PREFIX && (b += module$exports$Blockly$Dart.dartGenerator.injectId(module$exports$Blockly$Dart.dartGenerator.STATEMENT_PREFIX, a));
        module$exports$Blockly$Dart.dartGenerator.STATEMENT_SUFFIX && (b += module$exports$Blockly$Dart.dartGenerator.injectId(module$exports$Blockly$Dart.dartGenerator.STATEMENT_SUFFIX, a));
        if (module$exports$Blockly$Dart.dartGenerator.STATEMENT_PREFIX) {
          const c = a.getSurroundLoop();
          c && !c.suppressPrefixSuffix && (b += module$exports$Blockly$Dart.dartGenerator.injectId(module$exports$Blockly$Dart.dartGenerator.STATEMENT_PREFIX, c));
        }
        switch (a.getFieldValue("FLOW")) {
          case "BREAK":
            return b + "break;\n";
          case "CONTINUE":
            return b + "continue;\n";
        }
        throw Error("Unknown flow statement.");
      };
      var module$exports$Blockly$Dart$math = {}, module$contents$Blockly$Dart$math_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Dart.dartGenerator.addReservedWords("Math");
      module$exports$Blockly$Dart.dartGenerator.math_number = function(a) {
        a = Number(a.getFieldValue("NUM"));
        let b;
        Infinity === a ? (a = "double.infinity", b = module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) : -Infinity === a ? (a = "-double.infinity", b = module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_PREFIX) : b = 0 > a ? module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_PREFIX : module$exports$Blockly$Dart.dartGenerator.ORDER_ATOMIC;
        return [a, b];
      };
      module$exports$Blockly$Dart.dartGenerator.math_arithmetic = function(a) {
        var b = { ADD: [" + ", module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE], MINUS: [" - ", module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE], MULTIPLY: [" * ", module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE], DIVIDE: [" / ", module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE], POWER: [null, module$exports$Blockly$Dart.dartGenerator.ORDER_NONE] }[a.getFieldValue("OP")];
        const c = b[0];
        b = b[1];
        const d = module$exports$Blockly$Dart.dartGenerator.valueToCode(
          a,
          "A",
          b
        ) || "0";
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "B", b) || "0";
        return c ? [d + c + a, b] : (module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;", ["Math.pow(" + d + ", " + a + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX]);
      };
      module$exports$Blockly$Dart.dartGenerator.math_single = function(a) {
        const b = a.getFieldValue("OP");
        let c;
        if ("NEG" === b) return a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "NUM", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_PREFIX) || "0", "-" === a[0] && (a = " " + a), ["-" + a, module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_PREFIX];
        module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
        a = "ABS" === b || "ROUND" === b.substring(0, 5) ? module$exports$Blockly$Dart.dartGenerator.valueToCode(
          a,
          "NUM",
          module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX
        ) || "0" : "SIN" === b || "COS" === b || "TAN" === b ? module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "NUM", module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE) || "0" : module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "NUM", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "0";
        switch (b) {
          case "ABS":
            c = a + ".abs()";
            break;
          case "ROOT":
            c = "Math.sqrt(" + a + ")";
            break;
          case "LN":
            c = "Math.log(" + a + ")";
            break;
          case "EXP":
            c = "Math.exp(" + a + ")";
            break;
          case "POW10":
            c = "Math.pow(10," + a + ")";
            break;
          case "ROUND":
            c = a + ".round()";
            break;
          case "ROUNDUP":
            c = a + ".ceil()";
            break;
          case "ROUNDDOWN":
            c = a + ".floor()";
            break;
          case "SIN":
            c = "Math.sin(" + a + " / 180 * Math.pi)";
            break;
          case "COS":
            c = "Math.cos(" + a + " / 180 * Math.pi)";
            break;
          case "TAN":
            c = "Math.tan(" + a + " / 180 * Math.pi)";
        }
        if (c) return [c, module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
        switch (b) {
          case "LOG10":
            c = "Math.log(" + a + ") / Math.log(10)";
            break;
          case "ASIN":
            c = "Math.asin(" + a + ") / Math.pi * 180";
            break;
          case "ACOS":
            c = "Math.acos(" + a + ") / Math.pi * 180";
            break;
          case "ATAN":
            c = "Math.atan(" + a + ") / Math.pi * 180";
            break;
          default:
            throw Error("Unknown math operator: " + b);
        }
        return [c, module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE];
      };
      module$exports$Blockly$Dart.dartGenerator.math_constant = function(a) {
        const b = {
          PI: ["Math.pi", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX],
          E: ["Math.e", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX],
          GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE],
          SQRT2: ["Math.sqrt2", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX],
          SQRT1_2: ["Math.sqrt1_2", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX],
          INFINITY: ["double.infinity", module$exports$Blockly$Dart.dartGenerator.ORDER_ATOMIC]
        };
        a = a.getFieldValue("CONSTANT");
        "INFINITY" !== a && (module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;");
        return b[a];
      };
      module$exports$Blockly$Dart.dartGenerator.math_number_property = function(a) {
        var b = { EVEN: [" % 2 == 0", module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Dart.dartGenerator.ORDER_EQUALITY], ODD: [" % 2 == 1", module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Dart.dartGenerator.ORDER_EQUALITY], WHOLE: [" % 1 == 0", module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Dart.dartGenerator.ORDER_EQUALITY], POSITIVE: [
          " > 0",
          module$exports$Blockly$Dart.dartGenerator.ORDER_RELATIONAL,
          module$exports$Blockly$Dart.dartGenerator.ORDER_RELATIONAL
        ], NEGATIVE: [" < 0", module$exports$Blockly$Dart.dartGenerator.ORDER_RELATIONAL, module$exports$Blockly$Dart.dartGenerator.ORDER_RELATIONAL], DIVISIBLE_BY: [null, module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Dart.dartGenerator.ORDER_EQUALITY], PRIME: [null, module$exports$Blockly$Dart.dartGenerator.ORDER_NONE, module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX] };
        const c = a.getFieldValue("PROPERTY"), [d, e, f] = b[c];
        b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "NUMBER_TO_CHECK", e) || "0";
        if ("PRIME" === c) module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;", a = module$exports$Blockly$Dart.dartGenerator.provideFunction_("math_isPrime", `
bool ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(n) {
  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods
  if (n == 2 || n == 3) {
    return true;
  }
  // False if n is null, negative, is 1, or not whole.
  // And false if n is divisible by 2 or 3.
  if (n == null || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  // Check all the numbers of form 6k +/- 1, up to sqrt(n).
  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {
    if (n % (x - 1) == 0 || n % (x + 1) == 0) {
      return false;
    }
  }
  return true;
}
`) + "(" + b + ")";
        else if ("DIVISIBLE_BY" === c) {
          a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "DIVISOR", module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE) || "0";
          if ("0" === a) return ["false", module$exports$Blockly$Dart.dartGenerator.ORDER_ATOMIC];
          a = b + " % " + a + " == 0";
        } else a = b + d;
        return [a, f];
      };
      module$exports$Blockly$Dart.dartGenerator.math_change = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "DELTA", module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE) || "0";
        a = module$exports$Blockly$Dart.dartGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE);
        return a + " = (" + a + " is num ? " + a + " : 0) + " + b + ";\n";
      };
      module$exports$Blockly$Dart.dartGenerator.math_round = module$exports$Blockly$Dart.dartGenerator.math_single;
      module$exports$Blockly$Dart.dartGenerator.math_trig = module$exports$Blockly$Dart.dartGenerator.math_single;
      module$exports$Blockly$Dart.dartGenerator.math_on_list = function(a) {
        var b = a.getFieldValue("OP");
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "LIST", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "[]";
        switch (b) {
          case "SUM":
            b = module$exports$Blockly$Dart.dartGenerator.provideFunction_("math_sum", `
num ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List<num> myList) {
  num sumVal = 0;
  myList.forEach((num entry) {sumVal += entry;});
  return sumVal;
}
`) + "(" + a + ")";
            break;
          case "MIN":
            module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
            b = module$exports$Blockly$Dart.dartGenerator.provideFunction_("math_min", `
num ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List<num> myList) {
  if (myList.isEmpty) return null;
  num minVal = myList[0];
  myList.forEach((num entry) {minVal = Math.min(minVal, entry);});
  return minVal;
}
`) + "(" + a + ")";
            break;
          case "MAX":
            module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
            b = module$exports$Blockly$Dart.dartGenerator.provideFunction_("math_max", `
num ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List<num> myList) {
  if (myList.isEmpty) return null;
  num maxVal = myList[0];
  myList.forEach((num entry) {maxVal = Math.max(maxVal, entry);});
  return maxVal;
}
`) + "(" + a + ")";
            break;
          case "AVERAGE":
            b = module$exports$Blockly$Dart.dartGenerator.provideFunction_("math_mean", `
num ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List myList) {
  // First filter list for numbers only.
  List localList = new List.from(myList);
  localList.removeWhere((a) => a is! num);
  if (localList.isEmpty) return null;
  num sumVal = 0;
  localList.forEach((var entry) {sumVal += entry;});
  return sumVal / localList.length;
}
`) + "(" + a + ")";
            break;
          case "MEDIAN":
            b = module$exports$Blockly$Dart.dartGenerator.provideFunction_("math_median", `
num ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List myList) {
  // First filter list for numbers only, then sort, then return middle value
  // or the average of two middle values if list has an even number of elements.
  List localList = new List.from(myList);
  localList.removeWhere((a) => a is! num);
  if (localList.isEmpty) return null;
  localList.sort((a, b) => (a - b));
  int index = localList.length ~/ 2;
  if (localList.length % 2 == 1) {
    return localList[index];
  } else {
    return (localList[index - 1] + localList[index]) / 2;
  }
}
`) + "(" + a + ")";
            break;
          case "MODE":
            module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
            b = module$exports$Blockly$Dart.dartGenerator.provideFunction_("math_modes", `
List ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List values) {
  List modes = [];
  List counts = [];
  int maxCount = 0;
  for (int i = 0; i < values.length; i++) {
    var value = values[i];
    bool found = false;
    int thisCount;
    for (int j = 0; j < counts.length; j++) {
      if (counts[j][0] == value) {
        thisCount = ++counts[j][1];
        found = true;
        break;
      }
    }
    if (!found) {
      counts.add([value, 1]);
      thisCount = 1;
    }
    maxCount = Math.max(thisCount, maxCount);
  }
  for (int j = 0; j < counts.length; j++) {
    if (counts[j][1] == maxCount) {
        modes.add(counts[j][0]);
    }
  }
  return modes;
}
`) + "(" + a + ")";
            break;
          case "STD_DEV":
            module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
            b = module$exports$Blockly$Dart.dartGenerator.provideFunction_("math_standard_deviation", `
num ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List myList) {
  // First filter list for numbers only.
  List numbers = new List.from(myList);
  numbers.removeWhere((a) => a is! num);
  if (numbers.isEmpty) return null;
  num n = numbers.length;
  num sum = 0;
  numbers.forEach((x) => sum += x);
  num mean = sum / n;
  num sumSquare = 0;
  numbers.forEach((x) => sumSquare += Math.pow(x - mean, 2));
  return Math.sqrt(sumSquare / n);
}
`) + "(" + a + ")";
            break;
          case "RANDOM":
            module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
            b = module$exports$Blockly$Dart.dartGenerator.provideFunction_("math_random_item", `
dynamic ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(List myList) {
  int x = new Math.Random().nextInt(myList.length);
  return myList[x];
}
`) + "(" + a + ")";
            break;
          default:
            throw Error("Unknown operator: " + b);
        }
        return [b, module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.math_modulo = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "DIVIDEND", module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE) || "0";
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "DIVISOR", module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE) || "0";
        return [b + " % " + a, module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE];
      };
      module$exports$Blockly$Dart.dartGenerator.math_constrain = function(a) {
        module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
        const b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "0", c = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "LOW", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "0";
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "HIGH", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "double.infinity";
        return ["Math.min(Math.max(" + b + ", " + c + "), " + a + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.math_random_int = function(a) {
        module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
        const b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "FROM", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "0";
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "TO", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "0";
        return [module$exports$Blockly$Dart.dartGenerator.provideFunction_(
          "math_random_int",
          `
int ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(num a, num b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    num c = a;
    a = b;
    b = c;
  }
  return new Math.Random().nextInt(b - a + 1) + a;
}
`
        ) + "(" + b + ", " + a + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.math_random_float = function(a) {
        module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
        return ["new Math.Random().nextDouble()", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.math_atan2 = function(a) {
        module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;";
        const b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "X", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "0";
        return ["Math.atan2(" + (module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "Y", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "0") + ", " + b + ") / Math.pi * 180", module$exports$Blockly$Dart.dartGenerator.ORDER_MULTIPLICATIVE];
      };
      var module$exports$Blockly$Dart$procedures = {}, module$contents$Blockly$Dart$procedures_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Dart.dartGenerator.procedures_defreturn = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.nameDB_.getName(a.getFieldValue("NAME"), $.NameType$$module$build$src$core$names.PROCEDURE);
        var c = "";
        module$exports$Blockly$Dart.dartGenerator.STATEMENT_PREFIX && (c += module$exports$Blockly$Dart.dartGenerator.injectId(module$exports$Blockly$Dart.dartGenerator.STATEMENT_PREFIX, a));
        module$exports$Blockly$Dart.dartGenerator.STATEMENT_SUFFIX && (c += module$exports$Blockly$Dart.dartGenerator.injectId(
          module$exports$Blockly$Dart.dartGenerator.STATEMENT_SUFFIX,
          a
        ));
        c && (c = module$exports$Blockly$Dart.dartGenerator.prefixLines(c, module$exports$Blockly$Dart.dartGenerator.INDENT));
        let d = "";
        module$exports$Blockly$Dart.dartGenerator.INFINITE_LOOP_TRAP && (d = module$exports$Blockly$Dart.dartGenerator.prefixLines(module$exports$Blockly$Dart.dartGenerator.injectId(module$exports$Blockly$Dart.dartGenerator.INFINITE_LOOP_TRAP, a), module$exports$Blockly$Dart.dartGenerator.INDENT));
        const e = module$exports$Blockly$Dart.dartGenerator.statementToCode(a, "STACK");
        let f = module$exports$Blockly$Dart.dartGenerator.valueToCode(
          a,
          "RETURN",
          module$exports$Blockly$Dart.dartGenerator.ORDER_NONE
        ) || "", g = "";
        e && f && (g = c);
        f && (f = module$exports$Blockly$Dart.dartGenerator.INDENT + "return " + f + ";\n");
        const h = f ? "dynamic" : "void", k = [], l = a.getVars();
        for (let m = 0; m < l.length; m++) k[m] = module$exports$Blockly$Dart.dartGenerator.nameDB_.getName(l[m], $.NameType$$module$build$src$core$names.VARIABLE);
        c = h + " " + b + "(" + k.join(", ") + ") {\n" + c + d + e + g + f + "}";
        c = module$exports$Blockly$Dart.dartGenerator.scrub_(a, c);
        module$exports$Blockly$Dart.dartGenerator.definitions_["%" + b] = c;
        return null;
      };
      module$exports$Blockly$Dart.dartGenerator.procedures_defnoreturn = module$exports$Blockly$Dart.dartGenerator.procedures_defreturn;
      module$exports$Blockly$Dart.dartGenerator.procedures_callreturn = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.nameDB_.getName(a.getFieldValue("NAME"), $.NameType$$module$build$src$core$names.PROCEDURE), c = [], d = a.getVars();
        for (let e = 0; e < d.length; e++) c[e] = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "ARG" + e, module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "null";
        return [b + "(" + c.join(", ") + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.procedures_callnoreturn = function(a) {
        return module$exports$Blockly$Dart.dartGenerator.procedures_callreturn(a)[0] + ";\n";
      };
      module$exports$Blockly$Dart.dartGenerator.procedures_ifreturn = function(a) {
        let b = "if (" + (module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "CONDITION", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "false") + ") {\n";
        module$exports$Blockly$Dart.dartGenerator.STATEMENT_SUFFIX && (b += module$exports$Blockly$Dart.dartGenerator.prefixLines(module$exports$Blockly$Dart.dartGenerator.injectId(module$exports$Blockly$Dart.dartGenerator.STATEMENT_SUFFIX, a), module$exports$Blockly$Dart.dartGenerator.INDENT));
        a.hasReturnValue_ ? (a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "null", b += module$exports$Blockly$Dart.dartGenerator.INDENT + "return " + a + ";\n") : b += module$exports$Blockly$Dart.dartGenerator.INDENT + "return;\n";
        return b + "}\n";
      };
      var module$exports$Blockly$Dart$texts = {}, module$contents$Blockly$Dart$texts_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Dart.dartGenerator.addReservedWords("Html,Math");
      module$exports$Blockly$Dart.dartGenerator.text = function(a) {
        return [module$exports$Blockly$Dart.dartGenerator.quote_(a.getFieldValue("TEXT")), module$exports$Blockly$Dart.dartGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Dart.dartGenerator.text_multiline = function(a) {
        a = module$exports$Blockly$Dart.dartGenerator.multiline_quote_(a.getFieldValue("TEXT"));
        const b = -1 !== a.indexOf("+") ? module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE : module$exports$Blockly$Dart.dartGenerator.ORDER_ATOMIC;
        return [a, b];
      };
      module$exports$Blockly$Dart.dartGenerator.text_join = function(a) {
        switch (a.itemCount_) {
          case 0:
            return ["''", module$exports$Blockly$Dart.dartGenerator.ORDER_ATOMIC];
          case 1:
            return [(module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "ADD0", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) || "''") + ".toString()", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
          default:
            const b = Array(a.itemCount_);
            for (let c = 0; c < a.itemCount_; c++) b[c] = module$exports$Blockly$Dart.dartGenerator.valueToCode(
              a,
              "ADD" + c,
              module$exports$Blockly$Dart.dartGenerator.ORDER_NONE
            ) || "''";
            return ["[" + b.join(",") + "].join()", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
        }
      };
      module$exports$Blockly$Dart.dartGenerator.text_append = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE);
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "''";
        return b + " = [" + b + ", " + a + "].join();\n";
      };
      module$exports$Blockly$Dart.dartGenerator.text_length = function(a) {
        return [(module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) || "''") + ".length", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.text_isEmpty = function(a) {
        return [(module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) || "''") + ".isEmpty", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.text_indexOf = function(a) {
        var b = "FIRST" === a.getFieldValue("END") ? "indexOf" : "lastIndexOf";
        const c = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "FIND", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "''";
        b = (module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) || "''") + "." + b + "(" + c + ")";
        return a.workspace.options.oneBasedIndex ? [b + " + 1", module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE] : [b, module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.text_charAt = function(a) {
        const b = a.getFieldValue("WHERE") || "FROM_START", c = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "VALUE", "FIRST" === b || "FROM_START" === b ? module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX : module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "''";
        switch (b) {
          case "FIRST":
            return [c + "[0]", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
          case "FROM_START":
            return a = module$exports$Blockly$Dart.dartGenerator.getAdjusted(
              a,
              "AT"
            ), [c + "[" + a + "]", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
          case "LAST":
          case "FROM_END":
            return a = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT", 1), [module$exports$Blockly$Dart.dartGenerator.provideFunction_("text_get_from_end", `
String ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(String text, num x) {
  return text[text.length - x];
}
`) + "(" + c + ", " + a + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
          case "RANDOM":
            return module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;", [module$exports$Blockly$Dart.dartGenerator.provideFunction_("text_random_letter", `
String ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(String text) {
  int x = new Math.Random().nextInt(text.length);
  return text[x];
}
`) + "(" + c + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
        }
        throw Error("Unhandled option (text_charAt).");
      };
      module$exports$Blockly$Dart.dartGenerator.text_getSubstring = function(a) {
        var b = a.getFieldValue("WHERE1"), c = a.getFieldValue("WHERE2");
        const d = "FROM_END" !== b && "FROM_START" === c, e = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "STRING", d ? module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX : module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "''";
        if ("FIRST" === b && "LAST" === c) return [e, module$exports$Blockly$Dart.dartGenerator.ORDER_NONE];
        if (e.match(/^'?\w+'?$/) || d) {
          switch (b) {
            case "FROM_START":
              b = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT1");
              break;
            case "FROM_END":
              b = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT1", 1, false, module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE);
              b = e + ".length - " + b;
              break;
            case "FIRST":
              b = "0";
              break;
            default:
              throw Error("Unhandled option (text_getSubstring).");
          }
          switch (c) {
            case "FROM_START":
              var f = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT2", 1);
              break;
            case "FROM_END":
              f = module$exports$Blockly$Dart.dartGenerator.getAdjusted(
                a,
                "AT2",
                0,
                false,
                module$exports$Blockly$Dart.dartGenerator.ORDER_ADDITIVE
              );
              f = e + ".length - " + f;
              break;
            case "LAST":
              break;
            default:
              throw Error("Unhandled option (text_getSubstring).");
          }
          c = "LAST" === c ? e + ".substring(" + b + ")" : e + ".substring(" + b + ", " + f + ")";
        } else f = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT1"), a = module$exports$Blockly$Dart.dartGenerator.getAdjusted(a, "AT2"), c = module$exports$Blockly$Dart.dartGenerator.provideFunction_("text_get_substring", `
String ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(String text, String where1, num at1, String where2, num at2) {
  int getAt(String where, num at) {
    if (where == 'FROM_END') {
      at = text.length - 1 - at;
    } else if (where == 'FIRST') {
      at = 0;
    } else if (where == 'LAST') {
      at = text.length - 1;
    } else if (where != 'FROM_START') {
      throw 'Unhandled option (text_getSubstring).';
    }
    return at;
  }
  at1 = getAt(where1, at1);
  at2 = getAt(where2, at2) + 1;
  return text.substring(at1, at2);
}
`) + "(" + e + ", '" + b + "', " + f + ", '" + c + "', " + a + ")";
        return [c, module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.text_changeCase = function(a) {
        const b = { UPPERCASE: ".toUpperCase()", LOWERCASE: ".toLowerCase()", TITLECASE: null }[a.getFieldValue("CASE")];
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "TEXT", b ? module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX : module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "''";
        return [b ? a + b : module$exports$Blockly$Dart.dartGenerator.provideFunction_("text_toTitleCase", `
String ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(String str) {
  RegExp exp = new RegExp(r'\\b');
  List<String> list = str.split(exp);
  final title = new StringBuffer();
  for (String part in list) {
    if (part.length > 0) {
      title.write(part[0].toUpperCase());
      if (part.length > 0) {
        title.write(part.substring(1).toLowerCase());
      }
    }
  }
  return title.toString();
}
`) + "(" + a + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.text_trim = function(a) {
        const b = { LEFT: ".replaceFirst(new RegExp(r'^\\s+'), '')", RIGHT: ".replaceFirst(new RegExp(r'\\s+$'), '')", BOTH: ".trim()" }[a.getFieldValue("MODE")];
        return [(module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) || "''") + b, module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.text_print = function(a) {
        return "print(" + (module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "''") + ");\n";
      };
      module$exports$Blockly$Dart.dartGenerator.text_prompt_ext = function(a) {
        module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_html = "import 'dart:html' as Html;";
        let b = "Html.window.prompt(" + (a.getField("TEXT") ? module$exports$Blockly$Dart.dartGenerator.quote_(a.getFieldValue("TEXT")) : module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "''") + ", '')";
        "NUMBER" === a.getFieldValue("TYPE") && (module$exports$Blockly$Dart.dartGenerator.definitions_.import_dart_math = "import 'dart:math' as Math;", b = "Math.parseDouble(" + b + ")");
        return [b, module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.text_prompt = module$exports$Blockly$Dart.dartGenerator.text_prompt_ext;
      module$exports$Blockly$Dart.dartGenerator.text_count = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "''";
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "SUB", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "''";
        return [module$exports$Blockly$Dart.dartGenerator.provideFunction_("text_count", `
int ${module$exports$Blockly$Dart.dartGenerator.FUNCTION_NAME_PLACEHOLDER_}(String haystack, String needle) {
  if (needle.length == 0) {
    return haystack.length + 1;
  }
  int index = 0;
  int count = 0;
  while (index != -1) {
    index = haystack.indexOf(needle, index);
    if (index != -1) {
      count++;
     index += needle.length;
    }
  }
  return count;
}
`) + "(" + b + ", " + a + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.text_replace = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) || "''", c = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "FROM", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "''";
        a = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "TO", module$exports$Blockly$Dart.dartGenerator.ORDER_NONE) || "''";
        return [b + ".replaceAll(" + c + ", " + a + ")", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX];
      };
      module$exports$Blockly$Dart.dartGenerator.text_reverse = function(a) {
        return ["new String.fromCharCodes(" + (module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_POSTFIX) || "''") + ".runes.toList().reversed)", module$exports$Blockly$Dart.dartGenerator.ORDER_UNARY_PREFIX];
      };
      var module$exports$Blockly$Dart$variables = {}, module$contents$Blockly$Dart$variables_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Dart.dartGenerator.variables_get = function(a) {
        return [module$exports$Blockly$Dart.dartGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE), module$exports$Blockly$Dart.dartGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Dart.dartGenerator.variables_set = function(a) {
        const b = module$exports$Blockly$Dart.dartGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Dart.dartGenerator.ORDER_ASSIGNMENT) || "0";
        return module$exports$Blockly$Dart.dartGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE) + " = " + b + ";\n";
      };
      var module$exports$Blockly$Dart$variablesDynamic = {};
      module$exports$Blockly$Dart.dartGenerator.variables_get_dynamic = module$exports$Blockly$Dart.dartGenerator.variables_get;
      module$exports$Blockly$Dart.dartGenerator.variables_set_dynamic = module$exports$Blockly$Dart.dartGenerator.variables_set;
      var module$exports$Blockly$Dart$all = module$exports$Blockly$Dart;
      module$exports$Blockly$Dart.__namespace__ = $;
      return module$exports$Blockly$Dart;
    });
  }
});

// node_modules/blockly/dart.js
var require_dart = __commonJS({
  "node_modules/blockly/dart.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./dart_compressed.js"], factory);
      } else if (typeof exports === "object") {
        module.exports = factory(require_core_browser(), require_dart_compressed());
      } else {
        root.BlocklyDart = factory(root.Blockly, root.BlocklyDart);
      }
    })(exports, function(Blockly2, BlocklyDart) {
      return BlocklyDart;
    });
  }
});

// node_modules/blockly/lua_compressed.js
var require_lua_compressed = __commonJS({
  "node_modules/blockly/lua_compressed.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(["./blockly_compressed.js"], factory);
      } else if (typeof exports === "object") {
        module.exports = factory(require_blockly_compressed());
      } else {
        var factoryExports = factory(root.Blockly);
        root.Blockly.Lua = factoryExports.luaGenerator;
        root.Blockly.Lua.__namespace__ = factoryExports.__namespace__;
      }
    })(exports, function(__parent__) {
      var $ = __parent__.__namespace__;
      var module$exports$Blockly$Lua = {}, module$contents$Blockly$Lua_stringUtils = $.module$build$src$core$utils$string, module$contents$Blockly$Lua_CodeGenerator = $.CodeGenerator$$module$build$src$core$generator, module$contents$Blockly$Lua_inputTypes = $.module$build$src$core$input_types.inputTypes, module$contents$Blockly$Lua_Names = $.module$build$src$core$names.Names;
      module$exports$Blockly$Lua.luaGenerator = new $.CodeGenerator$$module$build$src$core$generator("Lua");
      module$exports$Blockly$Lua.luaGenerator.addReservedWords("_,__inext,assert,bit,colors,colours,coroutine,disk,dofile,error,fs,fetfenv,getmetatable,gps,help,io,ipairs,keys,loadfile,loadstring,math,native,next,os,paintutils,pairs,parallel,pcall,peripheral,print,printError,rawequal,rawget,rawset,read,rednet,redstone,rs,select,setfenv,setmetatable,sleep,string,table,term,textutils,tonumber,tostring,turtle,type,unpack,vector,write,xpcall,_VERSION,__indext,HTTP,and,break,do,else,elseif,end,false,for,function,if,in,local,nil,not,or,repeat,return,then,true,until,while,add,sub,mul,div,mod,pow,unm,concat,len,eq,lt,le,index,newindex,call,assert,collectgarbage,dofile,error,_G,getmetatable,inpairs,load,loadfile,next,pairs,pcall,print,rawequal,rawget,rawlen,rawset,select,setmetatable,tonumber,tostring,type,_VERSION,xpcall,require,package,string,table,math,bit32,io,file,os,debug");
      module$exports$Blockly$Lua.luaGenerator.ORDER_ATOMIC = 0;
      module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH = 1;
      module$exports$Blockly$Lua.luaGenerator.ORDER_EXPONENTIATION = 2;
      module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY = 3;
      module$exports$Blockly$Lua.luaGenerator.ORDER_MULTIPLICATIVE = 4;
      module$exports$Blockly$Lua.luaGenerator.ORDER_ADDITIVE = 5;
      module$exports$Blockly$Lua.luaGenerator.ORDER_CONCATENATION = 6;
      module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL = 7;
      module$exports$Blockly$Lua.luaGenerator.ORDER_AND = 8;
      module$exports$Blockly$Lua.luaGenerator.ORDER_OR = 9;
      module$exports$Blockly$Lua.luaGenerator.ORDER_NONE = 99;
      module$exports$Blockly$Lua.luaGenerator.isInitialized = false;
      module$exports$Blockly$Lua.luaGenerator.init = function(a) {
        Object.getPrototypeOf(this).init.call(this);
        this.nameDB_ ? this.nameDB_.reset() : this.nameDB_ = new $.module$build$src$core$names.Names(this.RESERVED_WORDS_);
        this.nameDB_.setVariableMap(a.getVariableMap());
        this.nameDB_.populateVariables(a);
        this.nameDB_.populateProcedures(a);
        this.isInitialized = true;
      };
      module$exports$Blockly$Lua.luaGenerator.finish = function(a) {
        const b = Object.values(this.definitions_);
        a = Object.getPrototypeOf(this).finish.call(this, a);
        this.isInitialized = false;
        this.nameDB_.reset();
        return b.join("\n\n") + "\n\n\n" + a;
      };
      module$exports$Blockly$Lua.luaGenerator.scrubNakedValue = function(a) {
        return "local _ = " + a + "\n";
      };
      module$exports$Blockly$Lua.luaGenerator.quote_ = function(a) {
        a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
        return "'" + a + "'";
      };
      module$exports$Blockly$Lua.luaGenerator.multiline_quote_ = function(a) {
        return a.split(/\n/g).map(this.quote_).join(" .. '\\n' ..\n");
      };
      module$exports$Blockly$Lua.luaGenerator.scrub_ = function(a, b, c) {
        let d = "";
        if (!a.outputConnection || !a.outputConnection.targetConnection) {
          var e = a.getCommentText();
          e && (e = $.module$build$src$core$utils$string.wrap(e, this.COMMENT_WRAP - 3), d += this.prefixLines(e, "-- ") + "\n");
          for (let f = 0; f < a.inputList.length; f++) a.inputList[f].type === $.module$build$src$core$input_types.inputTypes.VALUE && (e = a.inputList[f].connection.targetBlock()) && (e = this.allNestedComments(e)) && (d += this.prefixLines(e, "-- "));
        }
        a = a.nextConnection && a.nextConnection.targetBlock();
        c = c ? "" : this.blockToCode(a);
        return d + b + c;
      };
      var module$exports$Blockly$Lua$colour = {};
      module$exports$Blockly$Lua.luaGenerator.colour_picker = function(a) {
        return [module$exports$Blockly$Lua.luaGenerator.quote_(a.getFieldValue("COLOUR")), module$exports$Blockly$Lua.luaGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Lua.luaGenerator.colour_random = function(a) {
        return ['string.format("#%06x", math.random(0, 2^24 - 1))', module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.colour_rgb = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.provideFunction_("colour_rgb", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(r, g, b)
  r = math.floor(math.min(100, math.max(0, r)) * 2.55 + .5)
  g = math.floor(math.min(100, math.max(0, g)) * 2.55 + .5)
  b = math.floor(math.min(100, math.max(0, b)) * 2.55 + .5)
  return string.format("#%02x%02x%02x", r, g, b)
end
`), c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "RED", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || 0, d = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "GREEN", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || 0;
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "BLUE", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || 0;
        return [b + "(" + c + ", " + d + ", " + a + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.colour_blend = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.provideFunction_("colour_blend", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(colour1, colour2, ratio)
  local r1 = tonumber(string.sub(colour1, 2, 3), 16)
  local r2 = tonumber(string.sub(colour2, 2, 3), 16)
  local g1 = tonumber(string.sub(colour1, 4, 5), 16)
  local g2 = tonumber(string.sub(colour2, 4, 5), 16)
  local b1 = tonumber(string.sub(colour1, 6, 7), 16)
  local b2 = tonumber(string.sub(colour2, 6, 7), 16)
  local ratio = math.min(1, math.max(0, ratio))
  local r = math.floor(r1 * (1 - ratio) + r2 * ratio + .5)
  local g = math.floor(g1 * (1 - ratio) + g2 * ratio + .5)
  local b = math.floor(b1 * (1 - ratio) + b2 * ratio + .5)
  return string.format("#%02x%02x%02x", r, g, b)
end
`), c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "COLOUR1", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "'#000000'", d = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "COLOUR2", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "'#000000'";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "RATIO", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || 0;
        return [b + "(" + c + ", " + d + ", " + a + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      var module$exports$Blockly$Lua$lists = {}, module$contents$Blockly$Lua$lists_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Lua.luaGenerator.lists_create_empty = function(a) {
        return ["{}", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.lists_create_with = function(a) {
        const b = Array(a.itemCount_);
        for (let c = 0; c < a.itemCount_; c++) b[c] = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "ADD" + c, module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "None";
        return ["{" + b.join(", ") + "}", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.lists_repeat = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.provideFunction_("create_list_repeated", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(item, count)
  local t = {}
  for i = 1, count do
    table.insert(t, item)
  end
  return t
end
  `), c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "ITEM", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "None";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "NUM", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "0";
        return [b + "(" + c + ", " + a + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.lists_length = function(a) {
        return ["#" + (module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY) || "{}"), module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY];
      };
      module$exports$Blockly$Lua.luaGenerator.lists_isEmpty = function(a) {
        return ["#" + (module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY) || "{}") + " == 0", module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL];
      };
      module$exports$Blockly$Lua.luaGenerator.lists_indexOf = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "FIND", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''", c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "{}";
        return [("FIRST" === a.getFieldValue("END") ? module$exports$Blockly$Lua.luaGenerator.provideFunction_("first_index", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(t, elem)
  for k, v in ipairs(t) do
    if v == elem then
      return k
    end
  end
  return 0
end
`) : module$exports$Blockly$Lua.luaGenerator.provideFunction_("last_index", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(t, elem)
  for i = #t, 1, -1 do
    if t[i] == elem then
      return i
    end
  end
  return 0
end
`)) + "(" + c + ", " + b + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      var module$contents$Blockly$Lua$lists_getListIndex = function(a, b, c) {
        return "FIRST" === b ? "1" : "FROM_END" === b ? "#" + a + " + 1 - " + c : "LAST" === b ? "#" + a : "RANDOM" === b ? "math.random(#" + a + ")" : c;
      };
      module$exports$Blockly$Lua.luaGenerator.lists_getIndex = function(a) {
        var b = a.getFieldValue("MODE") || "GET", c = a.getFieldValue("WHERE") || "FROM_START";
        const d = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH) || "({})";
        if ("LAST" !== c && "FROM_END" !== c && "RANDOM" !== c || d.match(/^\w+$/)) {
          a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "AT", "GET" === b && "FROM_END" === c ? module$exports$Blockly$Lua.luaGenerator.ORDER_ADDITIVE : module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "1";
          a = module$contents$Blockly$Lua$lists_getListIndex(d, c, a);
          if ("GET" === b) return [d + "[" + a + "]", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
          c = "table.remove(" + d + ", " + a + ")";
          return "GET_REMOVE" === b ? [c, module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH] : c + "\n";
        }
        if ("REMOVE" === b) return b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "AT", "FROM_END" === c ? module$exports$Blockly$Lua.luaGenerator.ORDER_ADDITIVE : module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "1", a = module$exports$Blockly$Lua.luaGenerator.nameDB_.getDistinctName(
          "tmp_list",
          $.NameType$$module$build$src$core$names.VARIABLE
        ), b = module$contents$Blockly$Lua$lists_getListIndex(a, c, b), a + " = " + d + "\ntable.remove(" + a + ", " + b + ")\n";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "AT", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "1";
        return [("GET" === b ? module$exports$Blockly$Lua.luaGenerator.provideFunction_("list_get_" + c.toLowerCase(), [
          "function " + module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_ + "(t" + ("FROM_END" === c || "FROM_START" === c ? ", at)" : ")"),
          "  return t[" + module$contents$Blockly$Lua$lists_getListIndex("t", c, "at") + "]",
          "end"
        ]) : module$exports$Blockly$Lua.luaGenerator.provideFunction_("list_remove_" + c.toLowerCase(), ["function " + module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_ + "(t" + ("FROM_END" === c || "FROM_START" === c ? ", at)" : ")"), "  return table.remove(t, " + module$contents$Blockly$Lua$lists_getListIndex("t", c, "at") + ")", "end"])) + "(" + d + ("FROM_END" === c || "FROM_START" === c ? ", " + a : "") + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.lists_setIndex = function(a) {
        let b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "LIST", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH) || "{}";
        const c = a.getFieldValue("MODE") || "SET", d = a.getFieldValue("WHERE") || "FROM_START", e = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "AT", module$exports$Blockly$Lua.luaGenerator.ORDER_ADDITIVE) || "1";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "TO", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "None";
        let f = "";
        if (("LAST" === d || "FROM_END" === d || "RANDOM" === d) && !b.match(/^\w+$/)) {
          const g = module$exports$Blockly$Lua.luaGenerator.nameDB_.getDistinctName("tmp_list", $.NameType$$module$build$src$core$names.VARIABLE);
          f = g + " = " + b + "\n";
          b = g;
        }
        f = "SET" === c ? f + (b + "[" + module$contents$Blockly$Lua$lists_getListIndex(b, d, e) + "] = " + a) : f + ("table.insert(" + b + ", " + (module$contents$Blockly$Lua$lists_getListIndex(b, d, e) + ("LAST" === d ? " + 1" : "")) + ", " + a + ")");
        return f + "\n";
      };
      module$exports$Blockly$Lua.luaGenerator.lists_getSublist = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "LIST", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "{}", c = a.getFieldValue("WHERE1"), d = a.getFieldValue("WHERE2"), e = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "AT1", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "1";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "AT2", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "1";
        const f = "FROM_END" === c || "FROM_START" === c ? ", at1" : "", g = "FROM_END" === d || "FROM_START" === d ? ", at2" : "";
        return [module$exports$Blockly$Lua.luaGenerator.provideFunction_("list_sublist_" + c.toLowerCase() + "_" + d.toLowerCase(), `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(source${f}${g})
  local t = {}
  local start = ${module$contents$Blockly$Lua$lists_getListIndex("source", c, "at1")}
  local finish = ${module$contents$Blockly$Lua$lists_getListIndex("source", d, "at2")}
  for i = start, finish do
    table.insert(t, source[i])
  end
  return t
end
`) + "(" + b + ("FROM_END" === c || "FROM_START" === c ? ", " + e : "") + ("FROM_END" === d || "FROM_START" === d ? ", " + a : "") + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.lists_sort = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "LIST", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "{}", c = "1" === a.getFieldValue("DIRECTION") ? 1 : -1;
        a = a.getFieldValue("TYPE");
        return [module$exports$Blockly$Lua.luaGenerator.provideFunction_("list_sort", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(list, typev, direction)
  local t = {}
  for n,v in pairs(list) do table.insert(t, v) end
  local compareFuncs = {
    NUMERIC = function(a, b)
      return (tonumber(tostring(a)) or 0)
          < (tonumber(tostring(b)) or 0) end,
    TEXT = function(a, b)
      return tostring(a) < tostring(b) end,
    IGNORE_CASE = function(a, b)
      return string.lower(tostring(a)) < string.lower(tostring(b)) end
  }
  local compareTemp = compareFuncs[typev]
  local compare = compareTemp
  if direction == -1
  then compare = function(a, b) return compareTemp(b, a) end
  end
  table.sort(t, compare)
  return t
end
`) + "(" + b + ',"' + a + '", ' + c + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.lists_split = function(a) {
        let b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "INPUT", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE);
        const c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "DELIM", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''";
        a = a.getFieldValue("MODE");
        if ("SPLIT" === a) b || (b = "''"), a = module$exports$Blockly$Lua.luaGenerator.provideFunction_("list_string_split", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(input, delim)
  local t = {}
  local pos = 1
  while true do
    next_delim = string.find(input, delim, pos)
    if next_delim == nil then
      table.insert(t, string.sub(input, pos))
      break
    else
      table.insert(t, string.sub(input, pos, next_delim-1))
      pos = next_delim + #delim
    end
  end
  return t
end
`);
        else if ("JOIN" === a) b || (b = "{}"), a = "table.concat";
        else throw Error("Unknown mode: " + a);
        return [a + "(" + b + ", " + c + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.lists_reverse = function(a) {
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "LIST", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "{}";
        return [module$exports$Blockly$Lua.luaGenerator.provideFunction_("list_reverse", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(input)
  local reversed = {}
  for i = #input, 1, -1 do
    table.insert(reversed, input[i])
  end
  return reversed
end
`) + "(" + a + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      var module$exports$Blockly$Lua$logic = {};
      module$exports$Blockly$Lua.luaGenerator.controls_if = function(a) {
        var b = 0;
        let c = "";
        module$exports$Blockly$Lua.luaGenerator.STATEMENT_PREFIX && (c += module$exports$Blockly$Lua.luaGenerator.injectId(module$exports$Blockly$Lua.luaGenerator.STATEMENT_PREFIX, a));
        do {
          const d = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "IF" + b, module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "false";
          let e = module$exports$Blockly$Lua.luaGenerator.statementToCode(a, "DO" + b);
          module$exports$Blockly$Lua.luaGenerator.STATEMENT_SUFFIX && (e = module$exports$Blockly$Lua.luaGenerator.prefixLines(module$exports$Blockly$Lua.luaGenerator.injectId(module$exports$Blockly$Lua.luaGenerator.STATEMENT_SUFFIX, a), module$exports$Blockly$Lua.luaGenerator.INDENT) + e);
          c += (0 < b ? "else" : "") + "if " + d + " then\n" + e;
          b++;
        } while (a.getInput("IF" + b));
        if (a.getInput("ELSE") || module$exports$Blockly$Lua.luaGenerator.STATEMENT_SUFFIX) b = module$exports$Blockly$Lua.luaGenerator.statementToCode(a, "ELSE"), module$exports$Blockly$Lua.luaGenerator.STATEMENT_SUFFIX && (b = module$exports$Blockly$Lua.luaGenerator.prefixLines(module$exports$Blockly$Lua.luaGenerator.injectId(
          module$exports$Blockly$Lua.luaGenerator.STATEMENT_SUFFIX,
          a
        ), module$exports$Blockly$Lua.luaGenerator.INDENT) + b), c += "else\n" + b;
        return c + "end\n";
      };
      module$exports$Blockly$Lua.luaGenerator.controls_ifelse = module$exports$Blockly$Lua.luaGenerator.controls_if;
      module$exports$Blockly$Lua.luaGenerator.logic_compare = function(a) {
        const b = { EQ: "==", NEQ: "~=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[a.getFieldValue("OP")], c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "A", module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL) || "0";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "B", module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL) || "0";
        return [c + " " + b + " " + a, module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL];
      };
      module$exports$Blockly$Lua.luaGenerator.logic_operation = function(a) {
        const b = "AND" === a.getFieldValue("OP") ? "and" : "or", c = "and" === b ? module$exports$Blockly$Lua.luaGenerator.ORDER_AND : module$exports$Blockly$Lua.luaGenerator.ORDER_OR;
        let d = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "A", c);
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "B", c);
        if (d || a) {
          const e = "and" === b ? "true" : "false";
          d || (d = e);
          a || (a = e);
        } else a = d = "false";
        return [d + " " + b + " " + a, c];
      };
      module$exports$Blockly$Lua.luaGenerator.logic_negate = function(a) {
        return ["not " + (module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "BOOL", module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY) || "true"), module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY];
      };
      module$exports$Blockly$Lua.luaGenerator.logic_boolean = function(a) {
        return ["TRUE" === a.getFieldValue("BOOL") ? "true" : "false", module$exports$Blockly$Lua.luaGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Lua.luaGenerator.logic_null = function(a) {
        return ["nil", module$exports$Blockly$Lua.luaGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Lua.luaGenerator.logic_ternary = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "IF", module$exports$Blockly$Lua.luaGenerator.ORDER_AND) || "false", c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "THEN", module$exports$Blockly$Lua.luaGenerator.ORDER_AND) || "nil";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "ELSE", module$exports$Blockly$Lua.luaGenerator.ORDER_OR) || "nil";
        return [b + " and " + c + " or " + a, module$exports$Blockly$Lua.luaGenerator.ORDER_OR];
      };
      var module$exports$Blockly$Lua$loops = {}, module$contents$Blockly$Lua$loops_stringUtils = $.module$build$src$core$utils$string, module$contents$Blockly$Lua$loops_NameType = $.NameType$$module$build$src$core$names, module$contents$Blockly$Lua$loops_CONTINUE_STATEMENT = "goto continue\n", module$contents$Blockly$Lua$loops_addContinueLabel = function(a) {
        return -1 !== a.indexOf(module$contents$Blockly$Lua$loops_CONTINUE_STATEMENT) ? a + module$exports$Blockly$Lua.luaGenerator.INDENT + "::continue::\n" : a;
      };
      module$exports$Blockly$Lua.luaGenerator.controls_repeat_ext = function(a) {
        let b;
        b = a.getField("TIMES") ? String(Number(a.getFieldValue("TIMES"))) : module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "TIMES", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "0";
        b = $.module$build$src$core$utils$string.isNumber(b) ? parseInt(b, 10) : "math.floor(" + b + ")";
        let c = module$exports$Blockly$Lua.luaGenerator.statementToCode(a, "DO");
        c = module$exports$Blockly$Lua.luaGenerator.addLoopTrap(c, a);
        c = module$contents$Blockly$Lua$loops_addContinueLabel(c);
        return "for " + module$exports$Blockly$Lua.luaGenerator.nameDB_.getDistinctName("count", $.NameType$$module$build$src$core$names.VARIABLE) + " = 1, " + b + " do\n" + c + "end\n";
      };
      module$exports$Blockly$Lua.luaGenerator.controls_repeat = module$exports$Blockly$Lua.luaGenerator.controls_repeat_ext;
      module$exports$Blockly$Lua.luaGenerator.controls_whileUntil = function(a) {
        const b = "UNTIL" === a.getFieldValue("MODE");
        let c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "BOOL", b ? module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY : module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "false", d = module$exports$Blockly$Lua.luaGenerator.statementToCode(a, "DO");
        d = module$exports$Blockly$Lua.luaGenerator.addLoopTrap(d, a);
        d = module$contents$Blockly$Lua$loops_addContinueLabel(d);
        b && (c = "not " + c);
        return "while " + c + " do\n" + d + "end\n";
      };
      module$exports$Blockly$Lua.luaGenerator.controls_for = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE), c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "FROM", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "0", d = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "TO", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "0", e = module$exports$Blockly$Lua.luaGenerator.valueToCode(
          a,
          "BY",
          module$exports$Blockly$Lua.luaGenerator.ORDER_NONE
        ) || "1";
        let f = module$exports$Blockly$Lua.luaGenerator.statementToCode(a, "DO");
        f = module$exports$Blockly$Lua.luaGenerator.addLoopTrap(f, a);
        f = module$contents$Blockly$Lua$loops_addContinueLabel(f);
        a = "";
        let g;
        $.module$build$src$core$utils$string.isNumber(c) && $.module$build$src$core$utils$string.isNumber(d) && $.module$build$src$core$utils$string.isNumber(e) ? g = (Number(c) <= Number(d) ? "" : "-") + Math.abs(Number(e)) : (a = "", g = module$exports$Blockly$Lua.luaGenerator.nameDB_.getDistinctName(b + "_inc", $.NameType$$module$build$src$core$names.VARIABLE), a += g + " = ", a = $.module$build$src$core$utils$string.isNumber(e) ? a + (Math.abs(e) + "\n") : a + ("math.abs(" + e + ")\n"), a = a + ("if (" + c + ") > (" + d + ") then\n") + (module$exports$Blockly$Lua.luaGenerator.INDENT + g + " = -" + g + "\n"), a += "end\n");
        return a + ("for " + b + " = " + c + ", " + d + ", " + g) + (" do\n" + f + "end\n");
      };
      module$exports$Blockly$Lua.luaGenerator.controls_forEach = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE), c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "LIST", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "{}";
        let d = module$exports$Blockly$Lua.luaGenerator.statementToCode(a, "DO");
        d = module$exports$Blockly$Lua.luaGenerator.addLoopTrap(d, a);
        d = module$contents$Blockly$Lua$loops_addContinueLabel(d);
        return "for _, " + b + " in ipairs(" + c + ") do \n" + d + "end\n";
      };
      module$exports$Blockly$Lua.luaGenerator.controls_flow_statements = function(a) {
        let b = "";
        module$exports$Blockly$Lua.luaGenerator.STATEMENT_PREFIX && (b += module$exports$Blockly$Lua.luaGenerator.injectId(module$exports$Blockly$Lua.luaGenerator.STATEMENT_PREFIX, a));
        module$exports$Blockly$Lua.luaGenerator.STATEMENT_SUFFIX && (b += module$exports$Blockly$Lua.luaGenerator.injectId(module$exports$Blockly$Lua.luaGenerator.STATEMENT_SUFFIX, a));
        if (module$exports$Blockly$Lua.luaGenerator.STATEMENT_PREFIX) {
          const c = a.getSurroundLoop();
          c && !c.suppressPrefixSuffix && (b += module$exports$Blockly$Lua.luaGenerator.injectId(module$exports$Blockly$Lua.luaGenerator.STATEMENT_PREFIX, c));
        }
        switch (a.getFieldValue("FLOW")) {
          case "BREAK":
            return b + "break\n";
          case "CONTINUE":
            return b + module$contents$Blockly$Lua$loops_CONTINUE_STATEMENT;
        }
        throw Error("Unknown flow statement.");
      };
      var module$exports$Blockly$Lua$math = {}, module$contents$Blockly$Lua$math_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Lua.luaGenerator.math_number = function(a) {
        a = Number(a.getFieldValue("NUM"));
        return [a, 0 > a ? module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY : module$exports$Blockly$Lua.luaGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Lua.luaGenerator.math_arithmetic = function(a) {
        var b = { ADD: [" + ", module$exports$Blockly$Lua.luaGenerator.ORDER_ADDITIVE], MINUS: [" - ", module$exports$Blockly$Lua.luaGenerator.ORDER_ADDITIVE], MULTIPLY: [" * ", module$exports$Blockly$Lua.luaGenerator.ORDER_MULTIPLICATIVE], DIVIDE: [" / ", module$exports$Blockly$Lua.luaGenerator.ORDER_MULTIPLICATIVE], POWER: [" ^ ", module$exports$Blockly$Lua.luaGenerator.ORDER_EXPONENTIATION] }[a.getFieldValue("OP")];
        const c = b[0];
        b = b[1];
        const d = module$exports$Blockly$Lua.luaGenerator.valueToCode(
          a,
          "A",
          b
        ) || "0";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "B", b) || "0";
        return [d + c + a, b];
      };
      module$exports$Blockly$Lua.luaGenerator.math_single = function(a) {
        var b = a.getFieldValue("OP");
        if ("NEG" === b) return a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "NUM", module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY) || "0", ["-" + a, module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY];
        if ("POW10" === b) return a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "NUM", module$exports$Blockly$Lua.luaGenerator.ORDER_EXPONENTIATION) || "0", ["10 ^ " + a, module$exports$Blockly$Lua.luaGenerator.ORDER_EXPONENTIATION];
        a = "ROUND" === b ? module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "NUM", module$exports$Blockly$Lua.luaGenerator.ORDER_ADDITIVE) || "0" : module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "NUM", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "0";
        switch (b) {
          case "ABS":
            b = "math.abs(" + a + ")";
            break;
          case "ROOT":
            b = "math.sqrt(" + a + ")";
            break;
          case "LN":
            b = "math.log(" + a + ")";
            break;
          case "LOG10":
            b = "math.log(" + a + ", 10)";
            break;
          case "EXP":
            b = "math.exp(" + a + ")";
            break;
          case "ROUND":
            b = "math.floor(" + a + " + .5)";
            break;
          case "ROUNDUP":
            b = "math.ceil(" + a + ")";
            break;
          case "ROUNDDOWN":
            b = "math.floor(" + a + ")";
            break;
          case "SIN":
            b = "math.sin(math.rad(" + a + "))";
            break;
          case "COS":
            b = "math.cos(math.rad(" + a + "))";
            break;
          case "TAN":
            b = "math.tan(math.rad(" + a + "))";
            break;
          case "ASIN":
            b = "math.deg(math.asin(" + a + "))";
            break;
          case "ACOS":
            b = "math.deg(math.acos(" + a + "))";
            break;
          case "ATAN":
            b = "math.deg(math.atan(" + a + "))";
            break;
          default:
            throw Error("Unknown math operator: " + b);
        }
        return [b, module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.math_constant = function(a) {
        return { PI: ["math.pi", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH], E: ["math.exp(1)", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH], GOLDEN_RATIO: ["(1 + math.sqrt(5)) / 2", module$exports$Blockly$Lua.luaGenerator.ORDER_MULTIPLICATIVE], SQRT2: ["math.sqrt(2)", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH], SQRT1_2: ["math.sqrt(1 / 2)", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH], INFINITY: ["math.huge", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH] }[a.getFieldValue("CONSTANT")];
      };
      module$exports$Blockly$Lua.luaGenerator.math_number_property = function(a) {
        var b = { EVEN: [" % 2 == 0", module$exports$Blockly$Lua.luaGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL], ODD: [" % 2 == 1", module$exports$Blockly$Lua.luaGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL], WHOLE: [" % 1 == 0", module$exports$Blockly$Lua.luaGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL], POSITIVE: [
          " > 0",
          module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL,
          module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL
        ], NEGATIVE: [" < 0", module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL, module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL], DIVISIBLE_BY: [null, module$exports$Blockly$Lua.luaGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL], PRIME: [null, module$exports$Blockly$Lua.luaGenerator.ORDER_NONE, module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH] };
        const c = a.getFieldValue("PROPERTY"), [d, e, f] = b[c];
        b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "NUMBER_TO_CHECK", e) || "0";
        if ("PRIME" === c) a = module$exports$Blockly$Lua.luaGenerator.provideFunction_("math_isPrime", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(n)
  -- https://en.wikipedia.org/wiki/Primality_test#Naive_methods
  if n == 2 or n == 3 then
    return true
  end
  -- False if n is NaN, negative, is 1, or not whole.
  -- And false if n is divisible by 2 or 3.
  if not(n > 1) or n % 1 ~= 0 or n % 2 == 0 or n % 3 == 0 then
    return false
  end
  -- Check all the numbers of form 6k +/- 1, up to sqrt(n).
  for x = 6, math.sqrt(n) + 1.5, 6 do
    if n % (x - 1) == 0 or n % (x + 1) == 0 then
      return false
    end
  end
  return true
end
`) + "(" + b + ")";
        else if ("DIVISIBLE_BY" === c) {
          a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "DIVISOR", module$exports$Blockly$Lua.luaGenerator.ORDER_MULTIPLICATIVE) || "0";
          if ("0" === a) return ["nil", module$exports$Blockly$Lua.luaGenerator.ORDER_ATOMIC];
          a = b + " % " + a + " == 0";
        } else a = b + d;
        return [a, f];
      };
      module$exports$Blockly$Lua.luaGenerator.math_change = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "DELTA", module$exports$Blockly$Lua.luaGenerator.ORDER_ADDITIVE) || "0";
        a = module$exports$Blockly$Lua.luaGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE);
        return a + " = " + a + " + " + b + "\n";
      };
      module$exports$Blockly$Lua.luaGenerator.math_round = module$exports$Blockly$Lua.luaGenerator.math_single;
      module$exports$Blockly$Lua.luaGenerator.math_trig = module$exports$Blockly$Lua.luaGenerator.math_single;
      module$exports$Blockly$Lua.luaGenerator.math_on_list = function(a) {
        function b() {
          return module$exports$Blockly$Lua.luaGenerator.provideFunction_("math_sum", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(t)
  local result = 0
  for _, v in ipairs(t) do
    result = result + v
  end
  return result
end
`);
        }
        var c = a.getFieldValue("OP");
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "LIST", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "{}";
        switch (c) {
          case "SUM":
            c = b();
            break;
          case "MIN":
            c = module$exports$Blockly$Lua.luaGenerator.provideFunction_("math_min", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(t)
  if #t == 0 then
    return 0
  end
  local result = math.huge
  for _, v in ipairs(t) do
    if v < result then
      result = v
    end
  end
  return result
end
`);
            break;
          case "AVERAGE":
            c = module$exports$Blockly$Lua.luaGenerator.provideFunction_("math_average", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(t)
  if #t == 0 then
    return 0
  end
  return ${b()}(t) / #t
end
`);
            break;
          case "MAX":
            c = module$exports$Blockly$Lua.luaGenerator.provideFunction_("math_max", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(t)
  if #t == 0 then
    return 0
  end
  local result = -math.huge
  for _, v in ipairs(t) do
    if v > result then
      result = v
    end
  end
  return result
end
`);
            break;
          case "MEDIAN":
            c = module$exports$Blockly$Lua.luaGenerator.provideFunction_("math_median", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(t)
  -- Source: http://lua-users.org/wiki/SimpleStats
  if #t == 0 then
    return 0
  end
  local temp = {}
  for _, v in ipairs(t) do
    if type(v) == 'number' then
      table.insert(temp, v)
    end
  end
  table.sort(temp)
  if #temp % 2 == 0 then
    return (temp[#temp / 2] + temp[(#temp / 2) + 1]) / 2
  else
    return temp[math.ceil(#temp / 2)]
  end
end
`);
            break;
          case "MODE":
            c = module$exports$Blockly$Lua.luaGenerator.provideFunction_("math_modes", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(t)
  -- Source: http://lua-users.org/wiki/SimpleStats
  local counts = {}
  for _, v in ipairs(t) do
    if counts[v] == nil then
      counts[v] = 1
    else
      counts[v] = counts[v] + 1
    end
  end
  local biggestCount = 0
  for _, v  in pairs(counts) do
    if v > biggestCount then
      biggestCount = v
    end
  end
  local temp = {}
  for k, v in pairs(counts) do
    if v == biggestCount then
      table.insert(temp, k)
    end
  end
  return temp
end
`);
            break;
          case "STD_DEV":
            c = module$exports$Blockly$Lua.luaGenerator.provideFunction_("math_standard_deviation", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(t)
  local m
  local vm
  local total = 0
  local count = 0
  local result
  m = #t == 0 and 0 or ${b()}(t) / #t
  for _, v in ipairs(t) do
    if type(v) == 'number' then
      vm = v - m
      total = total + (vm * vm)
      count = count + 1
    end
  end
  result = math.sqrt(total / (count-1))
  return result
end
`);
            break;
          case "RANDOM":
            c = module$exports$Blockly$Lua.luaGenerator.provideFunction_("math_random_list", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(t)
  if #t == 0 then
    return nil
  end
  return t[math.random(#t)]
end
`);
            break;
          default:
            throw Error("Unknown operator: " + c);
        }
        return [c + "(" + a + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.math_modulo = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "DIVIDEND", module$exports$Blockly$Lua.luaGenerator.ORDER_MULTIPLICATIVE) || "0";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "DIVISOR", module$exports$Blockly$Lua.luaGenerator.ORDER_MULTIPLICATIVE) || "0";
        return [b + " % " + a, module$exports$Blockly$Lua.luaGenerator.ORDER_MULTIPLICATIVE];
      };
      module$exports$Blockly$Lua.luaGenerator.math_constrain = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "0", c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "LOW", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "-math.huge";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "HIGH", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "math.huge";
        return ["math.min(math.max(" + b + ", " + c + "), " + a + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.math_random_int = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "FROM", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "0";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "TO", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "0";
        return ["math.random(" + b + ", " + a + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.math_random_float = function(a) {
        return ["math.random()", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.math_atan2 = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "X", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "0";
        return ["math.deg(math.atan2(" + (module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "Y", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "0") + ", " + b + "))", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      var module$exports$Blockly$Lua$procedures = {}, module$contents$Blockly$Lua$procedures_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Lua.luaGenerator.procedures_defreturn = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.nameDB_.getName(a.getFieldValue("NAME"), $.NameType$$module$build$src$core$names.PROCEDURE);
        var c = "";
        module$exports$Blockly$Lua.luaGenerator.STATEMENT_PREFIX && (c += module$exports$Blockly$Lua.luaGenerator.injectId(module$exports$Blockly$Lua.luaGenerator.STATEMENT_PREFIX, a));
        module$exports$Blockly$Lua.luaGenerator.STATEMENT_SUFFIX && (c += module$exports$Blockly$Lua.luaGenerator.injectId(
          module$exports$Blockly$Lua.luaGenerator.STATEMENT_SUFFIX,
          a
        ));
        c && (c = module$exports$Blockly$Lua.luaGenerator.prefixLines(c, module$exports$Blockly$Lua.luaGenerator.INDENT));
        let d = "";
        module$exports$Blockly$Lua.luaGenerator.INFINITE_LOOP_TRAP && (d = module$exports$Blockly$Lua.luaGenerator.prefixLines(module$exports$Blockly$Lua.luaGenerator.injectId(module$exports$Blockly$Lua.luaGenerator.INFINITE_LOOP_TRAP, a), module$exports$Blockly$Lua.luaGenerator.INDENT));
        let e = module$exports$Blockly$Lua.luaGenerator.statementToCode(a, "STACK"), f = module$exports$Blockly$Lua.luaGenerator.valueToCode(
          a,
          "RETURN",
          module$exports$Blockly$Lua.luaGenerator.ORDER_NONE
        ) || "", g = "";
        e && f && (g = c);
        f ? f = module$exports$Blockly$Lua.luaGenerator.INDENT + "return " + f + "\n" : e || (e = "");
        const h = [], k = a.getVars();
        for (let l = 0; l < k.length; l++) h[l] = module$exports$Blockly$Lua.luaGenerator.nameDB_.getName(k[l], $.NameType$$module$build$src$core$names.VARIABLE);
        c = "function " + b + "(" + h.join(", ") + ")\n" + c + d + e + g + f + "end\n";
        c = module$exports$Blockly$Lua.luaGenerator.scrub_(a, c);
        module$exports$Blockly$Lua.luaGenerator.definitions_["%" + b] = c;
        return null;
      };
      module$exports$Blockly$Lua.luaGenerator.procedures_defnoreturn = module$exports$Blockly$Lua.luaGenerator.procedures_defreturn;
      module$exports$Blockly$Lua.luaGenerator.procedures_callreturn = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.nameDB_.getName(a.getFieldValue("NAME"), $.NameType$$module$build$src$core$names.PROCEDURE), c = [], d = a.getVars();
        for (let e = 0; e < d.length; e++) c[e] = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "ARG" + e, module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "nil";
        return [b + "(" + c.join(", ") + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.procedures_callnoreturn = function(a) {
        return module$exports$Blockly$Lua.luaGenerator.procedures_callreturn(a)[0] + "\n";
      };
      module$exports$Blockly$Lua.luaGenerator.procedures_ifreturn = function(a) {
        let b = "if " + (module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "CONDITION", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "false") + " then\n";
        module$exports$Blockly$Lua.luaGenerator.STATEMENT_SUFFIX && (b += module$exports$Blockly$Lua.luaGenerator.prefixLines(module$exports$Blockly$Lua.luaGenerator.injectId(module$exports$Blockly$Lua.luaGenerator.STATEMENT_SUFFIX, a), module$exports$Blockly$Lua.luaGenerator.INDENT));
        a.hasReturnValue_ ? (a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "nil", b += module$exports$Blockly$Lua.luaGenerator.INDENT + "return " + a + "\n") : b += module$exports$Blockly$Lua.luaGenerator.INDENT + "return\n";
        return b + "end\n";
      };
      var module$exports$Blockly$Lua$texts = {}, module$contents$Blockly$Lua$texts_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Lua.luaGenerator.text = function(a) {
        return [module$exports$Blockly$Lua.luaGenerator.quote_(a.getFieldValue("TEXT")), module$exports$Blockly$Lua.luaGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Lua.luaGenerator.text_multiline = function(a) {
        a = module$exports$Blockly$Lua.luaGenerator.multiline_quote_(a.getFieldValue("TEXT"));
        const b = -1 !== a.indexOf("..") ? module$exports$Blockly$Lua.luaGenerator.ORDER_CONCATENATION : module$exports$Blockly$Lua.luaGenerator.ORDER_ATOMIC;
        return [a, b];
      };
      module$exports$Blockly$Lua.luaGenerator.text_join = function(a) {
        if (0 === a.itemCount_) return ["''", module$exports$Blockly$Lua.luaGenerator.ORDER_ATOMIC];
        if (1 === a.itemCount_) return ["tostring(" + (module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "ADD0", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''") + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
        if (2 === a.itemCount_) {
          var b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "ADD0", module$exports$Blockly$Lua.luaGenerator.ORDER_CONCATENATION) || "''";
          a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "ADD1", module$exports$Blockly$Lua.luaGenerator.ORDER_CONCATENATION) || "''";
          return [b + " .. " + a, module$exports$Blockly$Lua.luaGenerator.ORDER_CONCATENATION];
        }
        b = [];
        for (let c = 0; c < a.itemCount_; c++) b[c] = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "ADD" + c, module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''";
        return ["table.concat({" + b.join(", ") + "})", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.text_append = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE);
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Lua.luaGenerator.ORDER_CONCATENATION) || "''";
        return b + " = " + b + " .. " + a + "\n";
      };
      module$exports$Blockly$Lua.luaGenerator.text_length = function(a) {
        return ["#" + (module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY) || "''"), module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY];
      };
      module$exports$Blockly$Lua.luaGenerator.text_isEmpty = function(a) {
        return ["#" + (module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY) || "''") + " == 0", module$exports$Blockly$Lua.luaGenerator.ORDER_RELATIONAL];
      };
      module$exports$Blockly$Lua.luaGenerator.text_indexOf = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "FIND", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''", c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''";
        return [("FIRST" === a.getFieldValue("END") ? module$exports$Blockly$Lua.luaGenerator.provideFunction_("firstIndexOf", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(str, substr)
  local i = string.find(str, substr, 1, true)
  if i == nil then
    return 0
  end
  return i
end
`) : module$exports$Blockly$Lua.luaGenerator.provideFunction_("lastIndexOf", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(str, substr)
  local i = string.find(string.reverse(str), string.reverse(substr), 1, true)
  if i then
    return #str + 2 - i - #substr
  end
  return 0
end
`)) + "(" + c + ", " + b + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.text_charAt = function(a) {
        var b = a.getFieldValue("WHERE") || "FROM_START";
        const c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "AT", "FROM_END" === b ? module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY : module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "1";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''";
        if ("RANDOM" === b) b = module$exports$Blockly$Lua.luaGenerator.provideFunction_(
          "text_random_letter",
          `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(str)
  local index = math.random(string.len(str))
  return string.sub(str, index, index)
end
`
        ) + "(" + a + ")";
        else {
          if ("FIRST" === b) b = "1";
          else if ("LAST" === b) b = "-1";
          else if ("FROM_START" === b) b = c;
          else if ("FROM_END" === b) b = "-" + c;
          else throw Error("Unhandled option (text_charAt).");
          b = b.match(/^-?\w*$/) ? "string.sub(" + a + ", " + b + ", " + b + ")" : module$exports$Blockly$Lua.luaGenerator.provideFunction_("text_char_at", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(str, index)
  return string.sub(str, index, index)
end
`) + "(" + a + ", " + b + ")";
        }
        return [b, module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.text_getSubstring = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "STRING", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''";
        var c = a.getFieldValue("WHERE1"), d = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "AT1", "FROM_END" === c ? module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY : module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "1";
        if ("FIRST" === c) c = 1;
        else if ("FROM_START" === c) c = d;
        else if ("FROM_END" === c) c = "-" + d;
        else throw Error("Unhandled option (text_getSubstring)");
        d = a.getFieldValue("WHERE2");
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "AT2", "FROM_END" === d ? module$exports$Blockly$Lua.luaGenerator.ORDER_UNARY : module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "1";
        if ("LAST" === d) a = -1;
        else if ("FROM_START" !== d) if ("FROM_END" === d) a = "-" + a;
        else throw Error("Unhandled option (text_getSubstring)");
        return ["string.sub(" + b + ", " + c + ", " + a + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.text_changeCase = function(a) {
        const b = a.getFieldValue("CASE");
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''";
        let c;
        "UPPERCASE" === b ? c = "string.upper" : "LOWERCASE" === b ? c = "string.lower" : "TITLECASE" === b && (c = module$exports$Blockly$Lua.luaGenerator.provideFunction_("text_titlecase", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(str)
  local buf = {}
  local inWord = false
  for i = 1, #str do
    local c = string.sub(str, i, i)
    if inWord then
      table.insert(buf, string.lower(c))
      if string.find(c, "%s") then
        inWord = false
      end
    else
      table.insert(buf, string.upper(c))
      inWord = true
    end
  end
  return table.concat(buf)
end
`));
        return [c + "(" + a + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.text_trim = function(a) {
        const b = { LEFT: "^%s*(,-)", RIGHT: "(.-)%s*$", BOTH: "^%s*(.-)%s*$" }[a.getFieldValue("MODE")];
        return ["string.gsub(" + (module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''") + ', "' + b + '", "%1")', module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.text_print = function(a) {
        return "print(" + (module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''") + ")\n";
      };
      module$exports$Blockly$Lua.luaGenerator.text_prompt_ext = function(a) {
        var b = a.getField("TEXT") ? module$exports$Blockly$Lua.luaGenerator.quote_(a.getFieldValue("TEXT")) : module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''";
        b = module$exports$Blockly$Lua.luaGenerator.provideFunction_("text_prompt", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(msg)
  io.write(msg)
  io.flush()
  return io.read()
end
`) + "(" + b + ")";
        "NUMBER" === a.getFieldValue("TYPE") && (b = "tonumber(" + b + ", 10)");
        return [b, module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.text_prompt = module$exports$Blockly$Lua.luaGenerator.text_prompt_ext;
      module$exports$Blockly$Lua.luaGenerator.text_count = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "SUB", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''";
        return [module$exports$Blockly$Lua.luaGenerator.provideFunction_("text_count", `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(haystack, needle)
  if #needle == 0 then
    return #haystack + 1
  end
  local i = 1
  local count = 0
  while true do
    i = string.find(haystack, needle, i, true)
    if i == nil then
      break
    end
    count = count + 1
    i = i + #needle
  end
  return count
end
`) + "(" + b + ", " + a + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.text_replace = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''", c = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "FROM", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''";
        a = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "TO", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''";
        return [module$exports$Blockly$Lua.luaGenerator.provideFunction_(
          "text_replace",
          `
function ${module$exports$Blockly$Lua.luaGenerator.FUNCTION_NAME_PLACEHOLDER_}(haystack, needle, replacement)
  local buf = {}
  local i = 1
  while i <= #haystack do
    if string.sub(haystack, i, i + #needle - 1) == needle then
      for j = 1, #replacement do
        table.insert(buf, string.sub(replacement, j, j))
      end
      i = i + #needle
    else
      table.insert(buf, string.sub(haystack, i, i))
      i = i + 1
    end
  end
  return table.concat(buf)
end
`
        ) + "(" + b + ", " + c + ", " + a + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      module$exports$Blockly$Lua.luaGenerator.text_reverse = function(a) {
        return ["string.reverse(" + (module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "''") + ")", module$exports$Blockly$Lua.luaGenerator.ORDER_HIGH];
      };
      var module$exports$Blockly$Lua$variables = {}, module$contents$Blockly$Lua$variables_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Lua.luaGenerator.variables_get = function(a) {
        return [module$exports$Blockly$Lua.luaGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE), module$exports$Blockly$Lua.luaGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Lua.luaGenerator.variables_set = function(a) {
        const b = module$exports$Blockly$Lua.luaGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Lua.luaGenerator.ORDER_NONE) || "0";
        return module$exports$Blockly$Lua.luaGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE) + " = " + b + "\n";
      };
      var module$exports$Blockly$Lua$variablesDynamic = {};
      module$exports$Blockly$Lua.luaGenerator.variables_get_dynamic = module$exports$Blockly$Lua.luaGenerator.variables_get;
      module$exports$Blockly$Lua.luaGenerator.variables_set_dynamic = module$exports$Blockly$Lua.luaGenerator.variables_set;
      var module$exports$Blockly$Lua$all = module$exports$Blockly$Lua;
      module$exports$Blockly$Lua.__namespace__ = $;
      return module$exports$Blockly$Lua;
    });
  }
});

// node_modules/blockly/lua.js
var require_lua = __commonJS({
  "node_modules/blockly/lua.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./lua_compressed.js"], factory);
      } else if (typeof exports === "object") {
        module.exports = factory(require_core_browser(), require_lua_compressed());
      } else {
        root.BlocklyLua = factory(root.Blockly, root.BlocklyLua);
      }
    })(exports, function(Blockly2, BlocklyLua) {
      return BlocklyLua;
    });
  }
});

// node_modules/blockly/php_compressed.js
var require_php_compressed = __commonJS({
  "node_modules/blockly/php_compressed.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(["./blockly_compressed.js"], factory);
      } else if (typeof exports === "object") {
        module.exports = factory(require_blockly_compressed());
      } else {
        var factoryExports = factory(root.Blockly);
        root.Blockly.PHP = factoryExports.phpGenerator;
        root.Blockly.PHP.__namespace__ = factoryExports.__namespace__;
      }
    })(exports, function(__parent__) {
      var $ = __parent__.__namespace__;
      var module$exports$Blockly$PHP = {}, module$contents$Blockly$PHP_stringUtils = $.module$build$src$core$utils$string, module$contents$Blockly$PHP_CodeGenerator = $.CodeGenerator$$module$build$src$core$generator, module$contents$Blockly$PHP_inputTypes = $.module$build$src$core$input_types.inputTypes, module$contents$Blockly$PHP_Names = $.module$build$src$core$names.Names;
      module$exports$Blockly$PHP.phpGenerator = new $.CodeGenerator$$module$build$src$core$generator("PHP");
      module$exports$Blockly$PHP.phpGenerator.addReservedWords("__halt_compiler,abstract,and,array,as,break,callable,case,catch,class,clone,const,continue,declare,default,die,do,echo,else,elseif,empty,enddeclare,endfor,endforeach,endif,endswitch,endwhile,eval,exit,extends,final,for,foreach,function,global,goto,if,implements,include,include_once,instanceof,insteadof,interface,isset,list,namespace,new,or,print,private,protected,public,require,require_once,return,static,switch,throw,trait,try,unset,use,var,while,xor,PHP_VERSION,PHP_MAJOR_VERSION,PHP_MINOR_VERSION,PHP_RELEASE_VERSION,PHP_VERSION_ID,PHP_EXTRA_VERSION,PHP_ZTS,PHP_DEBUG,PHP_MAXPATHLEN,PHP_OS,PHP_SAPI,PHP_EOL,PHP_INT_MAX,PHP_INT_SIZE,DEFAULT_INCLUDE_PATH,PEAR_INSTALL_DIR,PEAR_EXTENSION_DIR,PHP_EXTENSION_DIR,PHP_PREFIX,PHP_BINDIR,PHP_BINARY,PHP_MANDIR,PHP_LIBDIR,PHP_DATADIR,PHP_SYSCONFDIR,PHP_LOCALSTATEDIR,PHP_CONFIG_FILE_PATH,PHP_CONFIG_FILE_SCAN_DIR,PHP_SHLIB_SUFFIX,E_ERROR,E_WARNING,E_PARSE,E_NOTICE,E_CORE_ERROR,E_CORE_WARNING,E_COMPILE_ERROR,E_COMPILE_WARNING,E_USER_ERROR,E_USER_WARNING,E_USER_NOTICE,E_DEPRECATED,E_USER_DEPRECATED,E_ALL,E_STRICT,__COMPILER_HALT_OFFSET__,TRUE,FALSE,NULL,__CLASS__,__DIR__,__FILE__,__FUNCTION__,__LINE__,__METHOD__,__NAMESPACE__,__TRAIT__");
      module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC = 0;
      module$exports$Blockly$PHP.phpGenerator.ORDER_CLONE = 1;
      module$exports$Blockly$PHP.phpGenerator.ORDER_NEW = 1;
      module$exports$Blockly$PHP.phpGenerator.ORDER_MEMBER = 2.1;
      module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL = 2.2;
      module$exports$Blockly$PHP.phpGenerator.ORDER_POWER = 3;
      module$exports$Blockly$PHP.phpGenerator.ORDER_INCREMENT = 4;
      module$exports$Blockly$PHP.phpGenerator.ORDER_DECREMENT = 4;
      module$exports$Blockly$PHP.phpGenerator.ORDER_BITWISE_NOT = 4;
      module$exports$Blockly$PHP.phpGenerator.ORDER_CAST = 4;
      module$exports$Blockly$PHP.phpGenerator.ORDER_SUPPRESS_ERROR = 4;
      module$exports$Blockly$PHP.phpGenerator.ORDER_INSTANCEOF = 5;
      module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_NOT = 6;
      module$exports$Blockly$PHP.phpGenerator.ORDER_UNARY_PLUS = 7.1;
      module$exports$Blockly$PHP.phpGenerator.ORDER_UNARY_NEGATION = 7.2;
      module$exports$Blockly$PHP.phpGenerator.ORDER_MULTIPLICATION = 8.1;
      module$exports$Blockly$PHP.phpGenerator.ORDER_DIVISION = 8.2;
      module$exports$Blockly$PHP.phpGenerator.ORDER_MODULUS = 8.3;
      module$exports$Blockly$PHP.phpGenerator.ORDER_ADDITION = 9.1;
      module$exports$Blockly$PHP.phpGenerator.ORDER_SUBTRACTION = 9.2;
      module$exports$Blockly$PHP.phpGenerator.ORDER_STRING_CONCAT = 9.3;
      module$exports$Blockly$PHP.phpGenerator.ORDER_BITWISE_SHIFT = 10;
      module$exports$Blockly$PHP.phpGenerator.ORDER_RELATIONAL = 11;
      module$exports$Blockly$PHP.phpGenerator.ORDER_EQUALITY = 12;
      module$exports$Blockly$PHP.phpGenerator.ORDER_REFERENCE = 13;
      module$exports$Blockly$PHP.phpGenerator.ORDER_BITWISE_AND = 13;
      module$exports$Blockly$PHP.phpGenerator.ORDER_BITWISE_XOR = 14;
      module$exports$Blockly$PHP.phpGenerator.ORDER_BITWISE_OR = 15;
      module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_AND = 16;
      module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_OR = 17;
      module$exports$Blockly$PHP.phpGenerator.ORDER_IF_NULL = 18;
      module$exports$Blockly$PHP.phpGenerator.ORDER_CONDITIONAL = 19;
      module$exports$Blockly$PHP.phpGenerator.ORDER_ASSIGNMENT = 20;
      module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_AND_WEAK = 21;
      module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_XOR = 22;
      module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_OR_WEAK = 23;
      module$exports$Blockly$PHP.phpGenerator.ORDER_NONE = 99;
      module$exports$Blockly$PHP.phpGenerator.ORDER_OVERRIDES = [
        [module$exports$Blockly$PHP.phpGenerator.ORDER_MEMBER, module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL],
        [module$exports$Blockly$PHP.phpGenerator.ORDER_MEMBER, module$exports$Blockly$PHP.phpGenerator.ORDER_MEMBER],
        [module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_NOT, module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_NOT],
        [module$exports$Blockly$PHP.phpGenerator.ORDER_MULTIPLICATION, module$exports$Blockly$PHP.phpGenerator.ORDER_MULTIPLICATION],
        [module$exports$Blockly$PHP.phpGenerator.ORDER_ADDITION, module$exports$Blockly$PHP.phpGenerator.ORDER_ADDITION],
        [module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_AND, module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_AND],
        [module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_OR, module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_OR]
      ];
      module$exports$Blockly$PHP.phpGenerator.isInitialized = false;
      module$exports$Blockly$PHP.phpGenerator.init = function(a) {
        Object.getPrototypeOf(this).init.call(this);
        this.nameDB_ ? this.nameDB_.reset() : this.nameDB_ = new $.module$build$src$core$names.Names(this.RESERVED_WORDS_, "$");
        this.nameDB_.setVariableMap(a.getVariableMap());
        this.nameDB_.populateVariables(a);
        this.nameDB_.populateProcedures(a);
        this.isInitialized = true;
      };
      module$exports$Blockly$PHP.phpGenerator.finish = function(a) {
        const b = Object.values(this.definitions_);
        a = Object.getPrototypeOf(this).finish.call(this, a);
        this.isInitialized = false;
        this.nameDB_.reset();
        return b.join("\n\n") + "\n\n\n" + a;
      };
      module$exports$Blockly$PHP.phpGenerator.scrubNakedValue = function(a) {
        return a + ";\n";
      };
      module$exports$Blockly$PHP.phpGenerator.quote_ = function(a) {
        a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
        return "'" + a + "'";
      };
      module$exports$Blockly$PHP.phpGenerator.multiline_quote_ = function(a) {
        return a.split(/\n/g).map(this.quote_).join(' . "\\n" .\n');
      };
      module$exports$Blockly$PHP.phpGenerator.scrub_ = function(a, b, c) {
        let d = "";
        if (!a.outputConnection || !a.outputConnection.targetConnection) {
          var e = a.getCommentText();
          e && (e = $.module$build$src$core$utils$string.wrap(e, this.COMMENT_WRAP - 3), d += this.prefixLines(e, "// ") + "\n");
          for (let f = 0; f < a.inputList.length; f++) a.inputList[f].type === $.module$build$src$core$input_types.inputTypes.VALUE && (e = a.inputList[f].connection.targetBlock()) && (e = this.allNestedComments(e)) && (d += this.prefixLines(e, "// "));
        }
        a = a.nextConnection && a.nextConnection.targetBlock();
        c = c ? "" : this.blockToCode(a);
        return d + b + c;
      };
      module$exports$Blockly$PHP.phpGenerator.getAdjusted = function(a, b, c, d, e) {
        c = c || 0;
        e = e || this.ORDER_NONE;
        a.workspace.options.oneBasedIndex && c--;
        let f = a.workspace.options.oneBasedIndex ? "1" : "0", g = e, h;
        0 < c ? h = g = this.ORDER_ADDITION : 0 > c ? h = g = this.ORDER_SUBTRACTION : d && (h = g = this.ORDER_UNARY_NEGATION);
        a = this.valueToCode(a, b, g) || f;
        $.module$build$src$core$utils$string.isNumber(a) ? (a = Number(a) + c, d && (a = -a)) : (0 < c ? a = a + " + " + c : 0 > c && (a = a + " - " + -c), d && (a = c ? "-(" + a + ")" : "-" + a), h = Math.floor(h), e = Math.floor(e), h && e >= h && (a = "(" + a + ")"));
        return a;
      };
      var module$exports$Blockly$PHP$colour = {};
      module$exports$Blockly$PHP.phpGenerator.colour_picker = function(a) {
        return [module$exports$Blockly$PHP.phpGenerator.quote_(a.getFieldValue("COLOUR")), module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$PHP.phpGenerator.colour_random = function(a) {
        return [module$exports$Blockly$PHP.phpGenerator.provideFunction_("colour_random", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}() {
  return '#' . str_pad(dechex(mt_rand(0, 0xFFFFFF)), 6, '0', STR_PAD_LEFT);
}
`) + "()", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.colour_rgb = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "RED", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || 0, c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "GREEN", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || 0;
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "BLUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || 0;
        return [module$exports$Blockly$PHP.phpGenerator.provideFunction_("colour_rgb", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($r, $g, $b) {
  $r = round(max(min($r, 100), 0) * 2.55);
  $g = round(max(min($g, 100), 0) * 2.55);
  $b = round(max(min($b, 100), 0) * 2.55);
  $hex = '#';
  $hex .= str_pad(dechex($r), 2, '0', STR_PAD_LEFT);
  $hex .= str_pad(dechex($g), 2, '0', STR_PAD_LEFT);
  $hex .= str_pad(dechex($b), 2, '0', STR_PAD_LEFT);
  return $hex;
}
`) + "(" + b + ", " + c + ", " + a + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.colour_blend = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "COLOUR1", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "'#000000'", c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "COLOUR2", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "'#000000'";
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "RATIO", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || 0.5;
        return [module$exports$Blockly$PHP.phpGenerator.provideFunction_(
          "colour_blend",
          `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($c1, $c2, $ratio) {
  $ratio = max(min($ratio, 1), 0);
  $r1 = hexdec(substr($c1, 1, 2));
  $g1 = hexdec(substr($c1, 3, 2));
  $b1 = hexdec(substr($c1, 5, 2));
  $r2 = hexdec(substr($c2, 1, 2));
  $g2 = hexdec(substr($c2, 3, 2));
  $b2 = hexdec(substr($c2, 5, 2));
  $r = round($r1 * (1 - $ratio) + $r2 * $ratio);
  $g = round($g1 * (1 - $ratio) + $g2 * $ratio);
  $b = round($b1 * (1 - $ratio) + $b2 * $ratio);
  $hex = '#';
  $hex .= str_pad(dechex($r), 2, '0', STR_PAD_LEFT);
  $hex .= str_pad(dechex($g), 2, '0', STR_PAD_LEFT);
  $hex .= str_pad(dechex($b), 2, '0', STR_PAD_LEFT);
  return $hex;
}
`
        ) + "(" + b + ", " + c + ", " + a + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      var module$exports$Blockly$PHP$lists = {}, module$contents$Blockly$PHP$lists_stringUtils = $.module$build$src$core$utils$string, module$contents$Blockly$PHP$lists_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$PHP.phpGenerator.lists_create_empty = function(a) {
        return ["array()", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.lists_create_with = function(a) {
        let b = Array(a.itemCount_);
        for (let c = 0; c < a.itemCount_; c++) b[c] = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "ADD" + c, module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "null";
        b = "array(" + b.join(", ") + ")";
        return [b, module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.lists_repeat = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.provideFunction_("lists_repeat", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($value, $count) {
  $array = array();
  for ($index = 0; $index < $count; $index++) {
    $array[] = $value;
  }
  return $array;
}
`), c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "ITEM", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "null";
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "NUM", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "0";
        return [b + "(" + c + ", " + a + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.lists_length = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.provideFunction_("length", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($value) {
  if (is_string($value)) {
    return strlen($value);
  } else {
    return count($value);
  }
}
`);
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''";
        return [b + "(" + a + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.lists_isEmpty = function(a) {
        return ["empty(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL) || "array()") + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.lists_indexOf = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "FIND", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''", c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_MEMBER) || "[]";
        let d = " -1", e = "";
        a.workspace.options.oneBasedIndex && (d = " 0", e = " + 1");
        return [("FIRST" === a.getFieldValue("END") ? module$exports$Blockly$PHP.phpGenerator.provideFunction_("indexOf", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($haystack, $needle) {
  for ($index = 0; $index < count($haystack); $index++) {
    if ($haystack[$index] == $needle) return $index${e};
  }
  return ${d};
}
`) : module$exports$Blockly$PHP.phpGenerator.provideFunction_("lastIndexOf", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($haystack, $needle) {
  $last = ${d};
  for ($index = 0; $index < count($haystack); $index++) {
    if ($haystack[$index] == $needle) $last = $index${e};
  }
  return $last;
}
`)) + "(" + c + ", " + b + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.lists_getIndex = function(a) {
        var b = a.getFieldValue("MODE") || "GET";
        switch (a.getFieldValue("WHERE") || "FROM_START") {
          case "FIRST":
            if ("GET" === b) return [(module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_MEMBER) || "array()") + "[0]", module$exports$Blockly$PHP.phpGenerator.ORDER_MEMBER];
            if ("GET_REMOVE" === b) return ["array_shift(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()") + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
            if ("REMOVE" === b) return "array_shift(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()") + ");\n";
            break;
          case "LAST":
            if ("GET" === b) return ["end(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()") + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
            if ("GET_REMOVE" === b) return ["array_pop(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()") + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
            if ("REMOVE" === b) return "array_pop(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()") + ");\n";
            break;
          case "FROM_START":
            var c = module$exports$Blockly$PHP.phpGenerator.getAdjusted(a, "AT");
            if ("GET" === b) return [(module$exports$Blockly$PHP.phpGenerator.valueToCode(
              a,
              "VALUE",
              module$exports$Blockly$PHP.phpGenerator.ORDER_MEMBER
            ) || "array()") + "[" + c + "]", module$exports$Blockly$PHP.phpGenerator.ORDER_MEMBER];
            if ("GET_REMOVE" === b) return ["array_splice(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()") + ", " + c + ", 1)[0]", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
            if ("REMOVE" === b) return "array_splice(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()") + ", " + c + ", 1);\n";
            break;
          case "FROM_END":
            if ("GET" === b) return b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()", a = module$exports$Blockly$PHP.phpGenerator.getAdjusted(a, "AT", 1, true), ["array_slice(" + b + ", " + a + ", 1)[0]", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
            if ("GET_REMOVE" === b || "REMOVE" === b) {
              c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()";
              a = module$exports$Blockly$PHP.phpGenerator.getAdjusted(a, "AT", 1, false, module$exports$Blockly$PHP.phpGenerator.ORDER_SUBTRACTION);
              a = "array_splice(" + c + ", count(" + c + ") - " + a + ", 1)[0]";
              if ("GET_REMOVE" === b) return [a, module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
              if ("REMOVE" === b) return a + ";\n";
            }
            break;
          case "RANDOM":
            a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()";
            if ("GET" === b) return [module$exports$Blockly$PHP.phpGenerator.provideFunction_(
              "lists_get_random_item",
              `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($list) {
  return $list[rand(0,count($list)-1)];
}
`
            ) + "(" + a + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
            if ("GET_REMOVE" === b) return [module$exports$Blockly$PHP.phpGenerator.provideFunction_("lists_get_remove_random_item", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}(&$list) {
  $x = rand(0,count($list)-1);
  unset($list[$x]);
  return array_values($list);
}
`) + "(" + a + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
            if ("REMOVE" === b) return module$exports$Blockly$PHP.phpGenerator.provideFunction_("lists_remove_random_item", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}(&$list) {
  unset($list[rand(0,count($list)-1)]);
}
`) + "(" + a + ");\n";
        }
        throw Error("Unhandled combination (lists_getIndex).");
      };
      module$exports$Blockly$PHP.phpGenerator.lists_setIndex = function(a) {
        const b = a.getFieldValue("MODE") || "GET";
        var c = a.getFieldValue("WHERE") || "FROM_START";
        const d = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "TO", module$exports$Blockly$PHP.phpGenerator.ORDER_ASSIGNMENT) || "null";
        switch (c) {
          case "FIRST":
            if ("SET" === b) return (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_MEMBER) || "array()") + "[0] = " + d + ";\n";
            if ("INSERT" === b) return "array_unshift(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()") + ", " + d + ");\n";
            break;
          case "LAST":
            a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()";
            if ("SET" === b) return module$exports$Blockly$PHP.phpGenerator.provideFunction_("lists_set_last_item", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}(&$list, $value) {
  $list[count($list) - 1] = $value;
}
`) + "(" + a + ", " + d + ");\n";
            if ("INSERT" === b) return "array_push(" + a + ", " + d + ");\n";
            break;
          case "FROM_START":
            c = module$exports$Blockly$PHP.phpGenerator.getAdjusted(a, "AT");
            if ("SET" === b) return (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_MEMBER) || "array()") + "[" + c + "] = " + d + ";\n";
            if ("INSERT" === b) return "array_splice(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()") + ", " + c + ", 0, " + d + ");\n";
            break;
          case "FROM_END":
            c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()";
            a = module$exports$Blockly$PHP.phpGenerator.getAdjusted(a, "AT", 1);
            if ("SET" === b) return module$exports$Blockly$PHP.phpGenerator.provideFunction_("lists_set_from_end", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}(&$list, $at, $value) {
  $list[count($list) - $at] = $value;
}
`) + "(" + c + ", " + a + ", " + d + ");\n";
            if ("INSERT" === b) return module$exports$Blockly$PHP.phpGenerator.provideFunction_("lists_insert_from_end", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}(&$list, $at, $value) {
  return array_splice($list, count($list) - $at, 0, $value);
}
`) + "(" + c + ", " + a + ", " + d + ");\n";
            break;
          case "RANDOM":
            a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_REFERENCE) || "array()";
            if (a.match(/^\$\w+$/)) c = "";
            else {
              c = module$exports$Blockly$PHP.phpGenerator.nameDB_.getDistinctName("tmp_list", $.NameType$$module$build$src$core$names.VARIABLE);
              var e = c + " = &" + a + ";\n";
              a = c;
              c = e;
            }
            e = module$exports$Blockly$PHP.phpGenerator.nameDB_.getDistinctName("tmp_x", $.NameType$$module$build$src$core$names.VARIABLE);
            c += e + " = rand(0, count(" + a + ")-1);\n";
            if ("SET" === b) return c + (a + "[" + e + "] = " + d + ";\n");
            if ("INSERT" === b) return c + ("array_splice(" + a + ", " + e + ", 0, " + d + ");\n");
        }
        throw Error("Unhandled combination (lists_setIndex).");
      };
      module$exports$Blockly$PHP.phpGenerator.lists_getSublist = function(a) {
        var b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()", c = a.getFieldValue("WHERE1"), d = a.getFieldValue("WHERE2");
        if ("FIRST" !== c || "LAST" !== d) if (b.match(/^\$\w+$/) || "FROM_END" !== c && "FROM_START" === d) {
          switch (c) {
            case "FROM_START":
              c = module$exports$Blockly$PHP.phpGenerator.getAdjusted(a, "AT1");
              break;
            case "FROM_END":
              c = module$exports$Blockly$PHP.phpGenerator.getAdjusted(
                a,
                "AT1",
                1,
                false,
                module$exports$Blockly$PHP.phpGenerator.ORDER_SUBTRACTION
              );
              c = "count(" + b + ") - " + c;
              break;
            case "FIRST":
              c = "0";
              break;
            default:
              throw Error("Unhandled option (lists_getSublist).");
          }
          switch (d) {
            case "FROM_START":
              d = module$exports$Blockly$PHP.phpGenerator.getAdjusted(a, "AT2", 0, false, module$exports$Blockly$PHP.phpGenerator.ORDER_SUBTRACTION);
              d += " - ";
              d = $.module$build$src$core$utils$string.isNumber(String(c)) || String(c).match(/^\(.+\)$/) ? d + c : d + ("(" + c + ")");
              d += " + 1";
              break;
            case "FROM_END":
              d = module$exports$Blockly$PHP.phpGenerator.getAdjusted(
                a,
                "AT2",
                0,
                false,
                module$exports$Blockly$PHP.phpGenerator.ORDER_SUBTRACTION
              );
              d = "count(" + b + ") - " + d + " - ";
              d = $.module$build$src$core$utils$string.isNumber(String(c)) || String(c).match(/^\(.+\)$/) ? d + c : d + ("(" + c + ")");
              break;
            case "LAST":
              d = "count(" + b + ") - ";
              d = $.module$build$src$core$utils$string.isNumber(String(c)) || String(c).match(/^\(.+\)$/) ? d + c : d + ("(" + c + ")");
              break;
            default:
              throw Error("Unhandled option (lists_getSublist).");
          }
          b = "array_slice(" + b + ", " + c + ", " + d + ")";
        } else {
          const e = module$exports$Blockly$PHP.phpGenerator.getAdjusted(
            a,
            "AT1"
          );
          a = module$exports$Blockly$PHP.phpGenerator.getAdjusted(a, "AT2");
          b = module$exports$Blockly$PHP.phpGenerator.provideFunction_("lists_get_sublist", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($list, $where1, $at1, $where2, $at2) {
  if ($where1 == 'FROM_END') {
    $at1 = count($list) - 1 - $at1;
  } else if ($where1 == 'FIRST') {
    $at1 = 0;
  } else if ($where1 != 'FROM_START') {
    throw new Exception('Unhandled option (lists_get_sublist).');
  }
  $length = 0;
  if ($where2 == 'FROM_START') {
    $length = $at2 - $at1 + 1;
  } else if ($where2 == 'FROM_END') {
    $length = count($list) - $at1 - $at2;
  } else if ($where2 == 'LAST') {
    $length = count($list) - $at1;
  } else {
    throw new Exception('Unhandled option (lists_get_sublist).');
  }
  return array_slice($list, $at1, $length);
}
`) + "(" + b + ", '" + c + "', " + e + ", '" + d + "', " + a + ")";
        }
        return [b, module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.lists_sort = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()", c = "1" === a.getFieldValue("DIRECTION") ? 1 : -1;
        a = a.getFieldValue("TYPE");
        return [module$exports$Blockly$PHP.phpGenerator.provideFunction_("lists_sort", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($list, $type, $direction) {
  $sortCmpFuncs = array(
    'NUMERIC' => 'strnatcasecmp',
    'TEXT' => 'strcmp',
    'IGNORE_CASE' => 'strcasecmp'
  );
  $sortCmp = $sortCmpFuncs[$type];
  $list2 = $list;
  usort($list2, $sortCmp);
  if ($direction == -1) {
    $list2 = array_reverse($list2);
  }
  return $list2;
}
`) + "(" + b + ', "' + a + '", ' + c + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.lists_split = function(a) {
        let b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "INPUT", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE);
        const c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "DELIM", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''";
        a = a.getFieldValue("MODE");
        if ("SPLIT" === a) b || (b = "''"), a = "explode";
        else if ("JOIN" === a) b || (b = "array()"), a = "implode";
        else throw Error("Unknown mode: " + a);
        return [a + "(" + c + ", " + b + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.lists_reverse = function(a) {
        return ["array_reverse(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "[]") + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      var module$exports$Blockly$PHP$logic = {};
      module$exports$Blockly$PHP.phpGenerator.controls_if = function(a) {
        let b = 0, c = "", d, e;
        module$exports$Blockly$PHP.phpGenerator.STATEMENT_PREFIX && (c += module$exports$Blockly$PHP.phpGenerator.injectId(module$exports$Blockly$PHP.phpGenerator.STATEMENT_PREFIX, a));
        do
          e = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "IF" + b, module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "false", d = module$exports$Blockly$PHP.phpGenerator.statementToCode(a, "DO" + b), module$exports$Blockly$PHP.phpGenerator.STATEMENT_SUFFIX && (d = module$exports$Blockly$PHP.phpGenerator.prefixLines(module$exports$Blockly$PHP.phpGenerator.injectId(module$exports$Blockly$PHP.phpGenerator.STATEMENT_SUFFIX, a), module$exports$Blockly$PHP.phpGenerator.INDENT) + d), c += (0 < b ? " else " : "") + "if (" + e + ") {\n" + d + "}", b++;
        while (a.getInput("IF" + b));
        if (a.getInput("ELSE") || module$exports$Blockly$PHP.phpGenerator.STATEMENT_SUFFIX) d = module$exports$Blockly$PHP.phpGenerator.statementToCode(a, "ELSE"), module$exports$Blockly$PHP.phpGenerator.STATEMENT_SUFFIX && (d = module$exports$Blockly$PHP.phpGenerator.prefixLines(module$exports$Blockly$PHP.phpGenerator.injectId(
          module$exports$Blockly$PHP.phpGenerator.STATEMENT_SUFFIX,
          a
        ), module$exports$Blockly$PHP.phpGenerator.INDENT) + d), c += " else {\n" + d + "}";
        return c + "\n";
      };
      module$exports$Blockly$PHP.phpGenerator.controls_ifelse = module$exports$Blockly$PHP.phpGenerator.controls_if;
      module$exports$Blockly$PHP.phpGenerator.logic_compare = function(a) {
        const b = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[a.getFieldValue("OP")], c = "==" === b || "!=" === b ? module$exports$Blockly$PHP.phpGenerator.ORDER_EQUALITY : module$exports$Blockly$PHP.phpGenerator.ORDER_RELATIONAL, d = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "A", c) || "0";
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "B", c) || "0";
        return [d + " " + b + " " + a, c];
      };
      module$exports$Blockly$PHP.phpGenerator.logic_operation = function(a) {
        const b = "AND" === a.getFieldValue("OP") ? "&&" : "||", c = "&&" === b ? module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_AND : module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_OR;
        let d = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "A", c);
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "B", c);
        if (d || a) {
          const e = "&&" === b ? "true" : "false";
          d || (d = e);
          a || (a = e);
        } else a = d = "false";
        return [d + " " + b + " " + a, c];
      };
      module$exports$Blockly$PHP.phpGenerator.logic_negate = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_NOT;
        return ["!" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "BOOL", b) || "true"), b];
      };
      module$exports$Blockly$PHP.phpGenerator.logic_boolean = function(a) {
        return ["TRUE" === a.getFieldValue("BOOL") ? "true" : "false", module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$PHP.phpGenerator.logic_null = function(a) {
        return ["null", module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$PHP.phpGenerator.logic_ternary = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "IF", module$exports$Blockly$PHP.phpGenerator.ORDER_CONDITIONAL) || "false", c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "THEN", module$exports$Blockly$PHP.phpGenerator.ORDER_CONDITIONAL) || "null";
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "ELSE", module$exports$Blockly$PHP.phpGenerator.ORDER_CONDITIONAL) || "null";
        return [b + " ? " + c + " : " + a, module$exports$Blockly$PHP.phpGenerator.ORDER_CONDITIONAL];
      };
      var module$exports$Blockly$PHP$loops = {}, module$contents$Blockly$PHP$loops_stringUtils = $.module$build$src$core$utils$string, module$contents$Blockly$PHP$loops_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$PHP.phpGenerator.controls_repeat_ext = function(a) {
        let b;
        b = a.getField("TIMES") ? String(Number(a.getFieldValue("TIMES"))) : module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "TIMES", module$exports$Blockly$PHP.phpGenerator.ORDER_ASSIGNMENT) || "0";
        let c = module$exports$Blockly$PHP.phpGenerator.statementToCode(a, "DO");
        c = module$exports$Blockly$PHP.phpGenerator.addLoopTrap(c, a);
        a = "";
        const d = module$exports$Blockly$PHP.phpGenerator.nameDB_.getDistinctName("count", $.NameType$$module$build$src$core$names.VARIABLE);
        let e = b;
        b.match(/^\w+$/) || $.module$build$src$core$utils$string.isNumber(b) || (e = module$exports$Blockly$PHP.phpGenerator.nameDB_.getDistinctName("repeat_end", $.NameType$$module$build$src$core$names.VARIABLE), a += e + " = " + b + ";\n");
        return a + ("for (" + d + " = 0; " + d + " < " + e + "; " + d + "++) {\n" + c + "}\n");
      };
      module$exports$Blockly$PHP.phpGenerator.controls_repeat = module$exports$Blockly$PHP.phpGenerator.controls_repeat_ext;
      module$exports$Blockly$PHP.phpGenerator.controls_whileUntil = function(a) {
        const b = "UNTIL" === a.getFieldValue("MODE");
        let c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "BOOL", b ? module$exports$Blockly$PHP.phpGenerator.ORDER_LOGICAL_NOT : module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "false", d = module$exports$Blockly$PHP.phpGenerator.statementToCode(a, "DO");
        d = module$exports$Blockly$PHP.phpGenerator.addLoopTrap(d, a);
        b && (c = "!" + c);
        return "while (" + c + ") {\n" + d + "}\n";
      };
      module$exports$Blockly$PHP.phpGenerator.controls_for = function(a) {
        var b = module$exports$Blockly$PHP.phpGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE), c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "FROM", module$exports$Blockly$PHP.phpGenerator.ORDER_ASSIGNMENT) || "0", d = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "TO", module$exports$Blockly$PHP.phpGenerator.ORDER_ASSIGNMENT) || "0";
        const e = module$exports$Blockly$PHP.phpGenerator.valueToCode(
          a,
          "BY",
          module$exports$Blockly$PHP.phpGenerator.ORDER_ASSIGNMENT
        ) || "1";
        let f = module$exports$Blockly$PHP.phpGenerator.statementToCode(a, "DO");
        f = module$exports$Blockly$PHP.phpGenerator.addLoopTrap(f, a);
        if ($.module$build$src$core$utils$string.isNumber(c) && $.module$build$src$core$utils$string.isNumber(d) && $.module$build$src$core$utils$string.isNumber(e)) {
          var g = Number(c) <= Number(d);
          a = "for (" + b + " = " + c + "; " + b + (g ? " <= " : " >= ") + d + "; " + b;
          b = Math.abs(Number(e));
          a = 1 === b ? a + (g ? "++" : "--") : a + ((g ? " += " : " -= ") + b);
          a += ") {\n" + f + "}\n";
        } else a = "", g = c, c.match(/^\w+$/) || $.module$build$src$core$utils$string.isNumber(c) || (g = module$exports$Blockly$PHP.phpGenerator.nameDB_.getDistinctName(b + "_start", $.NameType$$module$build$src$core$names.VARIABLE), a += g + " = " + c + ";\n"), c = d, d.match(/^\w+$/) || $.module$build$src$core$utils$string.isNumber(d) || (c = module$exports$Blockly$PHP.phpGenerator.nameDB_.getDistinctName(b + "_end", $.NameType$$module$build$src$core$names.VARIABLE), a += c + " = " + d + ";\n"), d = module$exports$Blockly$PHP.phpGenerator.nameDB_.getDistinctName(b + "_inc", $.NameType$$module$build$src$core$names.VARIABLE), a += d + " = ", a = $.module$build$src$core$utils$string.isNumber(e) ? a + (Math.abs(e) + ";\n") : a + ("abs(" + e + ");\n"), a += "if (" + g + " > " + c + ") {\n", a += module$exports$Blockly$PHP.phpGenerator.INDENT + d + " = -" + d + ";\n", a = a + "}\nfor (" + (b + " = " + g + "; " + d + " >= 0 ? " + b + " <= " + c + " : " + b + " >= " + c + "; " + b + " += " + d + ") {\n" + f + "}\n");
        return a;
      };
      module$exports$Blockly$PHP.phpGenerator.controls_forEach = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE), c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_ASSIGNMENT) || "[]";
        let d = module$exports$Blockly$PHP.phpGenerator.statementToCode(a, "DO");
        d = module$exports$Blockly$PHP.phpGenerator.addLoopTrap(d, a);
        return "foreach (" + c + " as " + b + ") {\n" + d + "}\n";
      };
      module$exports$Blockly$PHP.phpGenerator.controls_flow_statements = function(a) {
        let b = "";
        module$exports$Blockly$PHP.phpGenerator.STATEMENT_PREFIX && (b += module$exports$Blockly$PHP.phpGenerator.injectId(module$exports$Blockly$PHP.phpGenerator.STATEMENT_PREFIX, a));
        module$exports$Blockly$PHP.phpGenerator.STATEMENT_SUFFIX && (b += module$exports$Blockly$PHP.phpGenerator.injectId(module$exports$Blockly$PHP.phpGenerator.STATEMENT_SUFFIX, a));
        if (module$exports$Blockly$PHP.phpGenerator.STATEMENT_PREFIX) {
          const c = a.getSurroundLoop();
          c && !c.suppressPrefixSuffix && (b += module$exports$Blockly$PHP.phpGenerator.injectId(module$exports$Blockly$PHP.phpGenerator.STATEMENT_PREFIX, c));
        }
        switch (a.getFieldValue("FLOW")) {
          case "BREAK":
            return b + "break;\n";
          case "CONTINUE":
            return b + "continue;\n";
        }
        throw Error("Unknown flow statement.");
      };
      var module$exports$Blockly$PHP$math = {}, module$contents$Blockly$PHP$math_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$PHP.phpGenerator.math_number = function(a) {
        a = Number(a.getFieldValue("NUM"));
        const b = 0 <= a ? module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC : module$exports$Blockly$PHP.phpGenerator.ORDER_UNARY_NEGATION;
        Infinity === a ? a = "INF" : -Infinity === a && (a = "-INF");
        return [a, b];
      };
      module$exports$Blockly$PHP.phpGenerator.math_arithmetic = function(a) {
        var b = { ADD: [" + ", module$exports$Blockly$PHP.phpGenerator.ORDER_ADDITION], MINUS: [" - ", module$exports$Blockly$PHP.phpGenerator.ORDER_SUBTRACTION], MULTIPLY: [" * ", module$exports$Blockly$PHP.phpGenerator.ORDER_MULTIPLICATION], DIVIDE: [" / ", module$exports$Blockly$PHP.phpGenerator.ORDER_DIVISION], POWER: [" ** ", module$exports$Blockly$PHP.phpGenerator.ORDER_POWER] }[a.getFieldValue("OP")];
        const c = b[0];
        b = b[1];
        const d = module$exports$Blockly$PHP.phpGenerator.valueToCode(
          a,
          "A",
          b
        ) || "0";
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "B", b) || "0";
        return [d + c + a, b];
      };
      module$exports$Blockly$PHP.phpGenerator.math_single = function(a) {
        const b = a.getFieldValue("OP");
        let c;
        if ("NEG" === b) return a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "NUM", module$exports$Blockly$PHP.phpGenerator.ORDER_UNARY_NEGATION) || "0", "-" === a[0] && (a = " " + a), ["-" + a, module$exports$Blockly$PHP.phpGenerator.ORDER_UNARY_NEGATION];
        a = "SIN" === b || "COS" === b || "TAN" === b ? module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "NUM", module$exports$Blockly$PHP.phpGenerator.ORDER_DIVISION) || "0" : module$exports$Blockly$PHP.phpGenerator.valueToCode(
          a,
          "NUM",
          module$exports$Blockly$PHP.phpGenerator.ORDER_NONE
        ) || "0";
        switch (b) {
          case "ABS":
            c = "abs(" + a + ")";
            break;
          case "ROOT":
            c = "sqrt(" + a + ")";
            break;
          case "LN":
            c = "log(" + a + ")";
            break;
          case "EXP":
            c = "exp(" + a + ")";
            break;
          case "POW10":
            c = "pow(10," + a + ")";
            break;
          case "ROUND":
            c = "round(" + a + ")";
            break;
          case "ROUNDUP":
            c = "ceil(" + a + ")";
            break;
          case "ROUNDDOWN":
            c = "floor(" + a + ")";
            break;
          case "SIN":
            c = "sin(" + a + " / 180 * pi())";
            break;
          case "COS":
            c = "cos(" + a + " / 180 * pi())";
            break;
          case "TAN":
            c = "tan(" + a + " / 180 * pi())";
        }
        if (c) return [c, module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
        switch (b) {
          case "LOG10":
            c = "log(" + a + ") / log(10)";
            break;
          case "ASIN":
            c = "asin(" + a + ") / pi() * 180";
            break;
          case "ACOS":
            c = "acos(" + a + ") / pi() * 180";
            break;
          case "ATAN":
            c = "atan(" + a + ") / pi() * 180";
            break;
          default:
            throw Error("Unknown math operator: " + b);
        }
        return [c, module$exports$Blockly$PHP.phpGenerator.ORDER_DIVISION];
      };
      module$exports$Blockly$PHP.phpGenerator.math_constant = function(a) {
        return { PI: ["M_PI", module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC], E: ["M_E", module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC], GOLDEN_RATIO: ["(1 + sqrt(5)) / 2", module$exports$Blockly$PHP.phpGenerator.ORDER_DIVISION], SQRT2: ["M_SQRT2", module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC], SQRT1_2: ["M_SQRT1_2", module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC], INFINITY: ["INF", module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC] }[a.getFieldValue("CONSTANT")];
      };
      module$exports$Blockly$PHP.phpGenerator.math_number_property = function(a) {
        var b = { EVEN: ["", " % 2 == 0", module$exports$Blockly$PHP.phpGenerator.ORDER_MODULUS, module$exports$Blockly$PHP.phpGenerator.ORDER_EQUALITY], ODD: ["", " % 2 == 1", module$exports$Blockly$PHP.phpGenerator.ORDER_MODULUS, module$exports$Blockly$PHP.phpGenerator.ORDER_EQUALITY], WHOLE: ["is_int(", ")", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE, module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL], POSITIVE: [
          "",
          " > 0",
          module$exports$Blockly$PHP.phpGenerator.ORDER_RELATIONAL,
          module$exports$Blockly$PHP.phpGenerator.ORDER_RELATIONAL
        ], NEGATIVE: ["", " < 0", module$exports$Blockly$PHP.phpGenerator.ORDER_RELATIONAL, module$exports$Blockly$PHP.phpGenerator.ORDER_RELATIONAL], DIVISIBLE_BY: [null, null, module$exports$Blockly$PHP.phpGenerator.ORDER_MODULUS, module$exports$Blockly$PHP.phpGenerator.ORDER_EQUALITY], PRIME: [null, null, module$exports$Blockly$PHP.phpGenerator.ORDER_NONE, module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL] };
        const c = a.getFieldValue("PROPERTY"), [d, e, f, g] = b[c];
        b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "NUMBER_TO_CHECK", f) || "0";
        if ("PRIME" === c) a = module$exports$Blockly$PHP.phpGenerator.provideFunction_("math_isPrime", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($n) {
  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods
  if ($n == 2 || $n == 3) {
    return true;
  }
  // False if n is NaN, negative, is 1, or not whole.
  // And false if n is divisible by 2 or 3.
  if (!is_numeric($n) || $n <= 1 || $n % 1 != 0 || $n % 2 == 0 || $n % 3 == 0) {
    return false;
  }
  // Check all the numbers of form 6k +/- 1, up to sqrt(n).
  for ($x = 6; $x <= sqrt($n) + 1; $x += 6) {
    if ($n % ($x - 1) == 0 || $n % ($x + 1) == 0) {
      return false;
    }
  }
  return true;
}
`) + "(" + b + ")";
        else if ("DIVISIBLE_BY" === c) {
          a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "DIVISOR", module$exports$Blockly$PHP.phpGenerator.ORDER_MODULUS) || "0";
          if ("0" === a) return ["false", module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC];
          a = b + " % " + a + " == 0";
        } else a = d + b + e;
        return [a, g];
      };
      module$exports$Blockly$PHP.phpGenerator.math_change = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "DELTA", module$exports$Blockly$PHP.phpGenerator.ORDER_ADDITION) || "0";
        return module$exports$Blockly$PHP.phpGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE) + " += " + b + ";\n";
      };
      module$exports$Blockly$PHP.phpGenerator.math_round = module$exports$Blockly$PHP.phpGenerator.math_single;
      module$exports$Blockly$PHP.phpGenerator.math_trig = module$exports$Blockly$PHP.phpGenerator.math_single;
      module$exports$Blockly$PHP.phpGenerator.math_on_list = function(a) {
        var b = a.getFieldValue("OP");
        switch (b) {
          case "SUM":
            a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL) || "array()";
            a = "array_sum(" + a + ")";
            break;
          case "MIN":
            a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL) || "array()";
            a = "min(" + a + ")";
            break;
          case "MAX":
            a = module$exports$Blockly$PHP.phpGenerator.valueToCode(
              a,
              "LIST",
              module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL
            ) || "array()";
            a = "max(" + a + ")";
            break;
          case "AVERAGE":
            b = module$exports$Blockly$PHP.phpGenerator.provideFunction_("math_mean", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($myList) {
  return array_sum($myList) / count($myList);
}
`);
            a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "array()";
            a = b + "(" + a + ")";
            break;
          case "MEDIAN":
            b = module$exports$Blockly$PHP.phpGenerator.provideFunction_("math_median", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($arr) {
  sort($arr,SORT_NUMERIC);
  return (count($arr) % 2) ? $arr[floor(count($arr) / 2)] :
      ($arr[floor(count($arr) / 2)] + $arr[floor(count($arr) / 2) - 1]) / 2;
}
`);
            a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "[]";
            a = b + "(" + a + ")";
            break;
          case "MODE":
            b = module$exports$Blockly$PHP.phpGenerator.provideFunction_("math_modes", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($values) {
  if (empty($values)) return array();
  $counts = array_count_values($values);
  arsort($counts); // Sort counts in descending order
  $modes = array_keys($counts, current($counts), true);
  return $modes;
}
`);
            a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "[]";
            a = b + "(" + a + ")";
            break;
          case "STD_DEV":
            b = module$exports$Blockly$PHP.phpGenerator.provideFunction_("math_standard_deviation", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($numbers) {
  $n = count($numbers);
  if (!$n) return null;
  $mean = array_sum($numbers) / count($numbers);
  foreach($numbers as $key => $num) $devs[$key] = pow($num - $mean, 2);
  return sqrt(array_sum($devs) / (count($devs) - 1));
}
`);
            a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "[]";
            a = b + "(" + a + ")";
            break;
          case "RANDOM":
            b = module$exports$Blockly$PHP.phpGenerator.provideFunction_("math_random_list", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($list) {
  $x = rand(0, count($list)-1);
  return $list[$x];
}
`);
            a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LIST", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "[]";
            a = b + "(" + a + ")";
            break;
          default:
            throw Error("Unknown operator: " + b);
        }
        return [a, module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.math_modulo = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "DIVIDEND", module$exports$Blockly$PHP.phpGenerator.ORDER_MODULUS) || "0";
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "DIVISOR", module$exports$Blockly$PHP.phpGenerator.ORDER_MODULUS) || "0";
        return [b + " % " + a, module$exports$Blockly$PHP.phpGenerator.ORDER_MODULUS];
      };
      module$exports$Blockly$PHP.phpGenerator.math_constrain = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "0", c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "LOW", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "0";
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "HIGH", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "Infinity";
        return ["min(max(" + b + ", " + c + "), " + a + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.math_random_int = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "FROM", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "0";
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "TO", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "0";
        return [module$exports$Blockly$PHP.phpGenerator.provideFunction_("math_random_int", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($a, $b) {
  if ($a > $b) {
    return rand($b, $a);
  }
  return rand($a, $b);
}
`) + "(" + b + ", " + a + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.math_random_float = function(a) {
        return ["(float)rand()/(float)getrandmax()", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.math_atan2 = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "X", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "0";
        return ["atan2(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "Y", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "0") + ", " + b + ") / pi() * 180", module$exports$Blockly$PHP.phpGenerator.ORDER_DIVISION];
      };
      var module$exports$Blockly$PHP$procedures = {}, module$contents$Blockly$PHP$procedures_Variables = $.module$build$src$core$variables, module$contents$Blockly$PHP$procedures_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$PHP.phpGenerator.procedures_defreturn = function(a) {
        var b = [], c = a.workspace, d = $.module$build$src$core$variables.allUsedVarModels(c) || [];
        for (let m = 0, n; n = d[m]; m++) {
          var e = n.name;
          -1 === a.getVars().indexOf(e) && b.push(module$exports$Blockly$PHP.phpGenerator.nameDB_.getName(e, $.NameType$$module$build$src$core$names.VARIABLE));
        }
        c = $.module$build$src$core$variables.allDeveloperVariables(c);
        for (d = 0; d < c.length; d++) b.push(module$exports$Blockly$PHP.phpGenerator.nameDB_.getName(c[d], $.NameType$$module$build$src$core$names.DEVELOPER_VARIABLE));
        c = b.length ? module$exports$Blockly$PHP.phpGenerator.INDENT + "global " + b.join(", ") + ";\n" : "";
        b = module$exports$Blockly$PHP.phpGenerator.nameDB_.getName(a.getFieldValue("NAME"), $.NameType$$module$build$src$core$names.PROCEDURE);
        d = "";
        module$exports$Blockly$PHP.phpGenerator.STATEMENT_PREFIX && (d += module$exports$Blockly$PHP.phpGenerator.injectId(module$exports$Blockly$PHP.phpGenerator.STATEMENT_PREFIX, a));
        module$exports$Blockly$PHP.phpGenerator.STATEMENT_SUFFIX && (d += module$exports$Blockly$PHP.phpGenerator.injectId(
          module$exports$Blockly$PHP.phpGenerator.STATEMENT_SUFFIX,
          a
        ));
        d && (d = module$exports$Blockly$PHP.phpGenerator.prefixLines(d, module$exports$Blockly$PHP.phpGenerator.INDENT));
        e = "";
        module$exports$Blockly$PHP.phpGenerator.INFINITE_LOOP_TRAP && (e = module$exports$Blockly$PHP.phpGenerator.prefixLines(module$exports$Blockly$PHP.phpGenerator.injectId(module$exports$Blockly$PHP.phpGenerator.INFINITE_LOOP_TRAP, a), module$exports$Blockly$PHP.phpGenerator.INDENT));
        const f = module$exports$Blockly$PHP.phpGenerator.statementToCode(a, "STACK");
        let g = module$exports$Blockly$PHP.phpGenerator.valueToCode(
          a,
          "RETURN",
          module$exports$Blockly$PHP.phpGenerator.ORDER_NONE
        ) || "", h = "";
        f && g && (h = d);
        g && (g = module$exports$Blockly$PHP.phpGenerator.INDENT + "return " + g + ";\n");
        const k = [], l = a.getVars();
        for (let m = 0; m < l.length; m++) k[m] = module$exports$Blockly$PHP.phpGenerator.nameDB_.getName(l[m], $.NameType$$module$build$src$core$names.VARIABLE);
        c = "function " + b + "(" + k.join(", ") + ") {\n" + c + d + e + f + h + g + "}";
        c = module$exports$Blockly$PHP.phpGenerator.scrub_(a, c);
        module$exports$Blockly$PHP.phpGenerator.definitions_["%" + b] = c;
        return null;
      };
      module$exports$Blockly$PHP.phpGenerator.procedures_defnoreturn = module$exports$Blockly$PHP.phpGenerator.procedures_defreturn;
      module$exports$Blockly$PHP.phpGenerator.procedures_callreturn = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.nameDB_.getName(a.getFieldValue("NAME"), $.NameType$$module$build$src$core$names.PROCEDURE), c = [], d = a.getVars();
        for (let e = 0; e < d.length; e++) c[e] = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "ARG" + e, module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "null";
        return [b + "(" + c.join(", ") + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.procedures_callnoreturn = function(a) {
        return module$exports$Blockly$PHP.phpGenerator.procedures_callreturn(a)[0] + ";\n";
      };
      module$exports$Blockly$PHP.phpGenerator.procedures_ifreturn = function(a) {
        let b = "if (" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "CONDITION", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "false") + ") {\n";
        module$exports$Blockly$PHP.phpGenerator.STATEMENT_SUFFIX && (b += module$exports$Blockly$PHP.phpGenerator.prefixLines(module$exports$Blockly$PHP.phpGenerator.injectId(module$exports$Blockly$PHP.phpGenerator.STATEMENT_SUFFIX, a), module$exports$Blockly$PHP.phpGenerator.INDENT));
        a.hasReturnValue_ ? (a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "null", b += module$exports$Blockly$PHP.phpGenerator.INDENT + "return " + a + ";\n") : b += module$exports$Blockly$PHP.phpGenerator.INDENT + "return;\n";
        return b + "}\n";
      };
      var module$exports$Blockly$PHP$texts = {}, module$contents$Blockly$PHP$texts_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$PHP.phpGenerator.text = function(a) {
        return [module$exports$Blockly$PHP.phpGenerator.quote_(a.getFieldValue("TEXT")), module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$PHP.phpGenerator.text_multiline = function(a) {
        a = module$exports$Blockly$PHP.phpGenerator.multiline_quote_(a.getFieldValue("TEXT"));
        const b = -1 !== a.indexOf(".") ? module$exports$Blockly$PHP.phpGenerator.ORDER_STRING_CONCAT : module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC;
        return [a, b];
      };
      module$exports$Blockly$PHP.phpGenerator.text_join = function(a) {
        if (0 === a.itemCount_) return ["''", module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC];
        if (1 === a.itemCount_) return [module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "ADD0", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE];
        if (2 === a.itemCount_) {
          var b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "ADD0", module$exports$Blockly$PHP.phpGenerator.ORDER_STRING_CONCAT) || "''";
          a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "ADD1", module$exports$Blockly$PHP.phpGenerator.ORDER_STRING_CONCAT) || "''";
          return [b + " . " + a, module$exports$Blockly$PHP.phpGenerator.ORDER_STRING_CONCAT];
        }
        b = Array(a.itemCount_);
        for (let c = 0; c < a.itemCount_; c++) b[c] = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "ADD" + c, module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''";
        return ["implode('', array(" + b.join(",") + "))", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.text_append = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE);
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "TEXT", module$exports$Blockly$PHP.phpGenerator.ORDER_ASSIGNMENT) || "''";
        return b + " .= " + a + ";\n";
      };
      module$exports$Blockly$PHP.phpGenerator.text_length = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.provideFunction_("length", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($value) {
  if (is_string($value)) {
    return strlen($value);
  }
  return count($value);
}
`);
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''";
        return [b + "(" + a + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.text_isEmpty = function(a) {
        return ["empty(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''") + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.text_indexOf = function(a) {
        const b = "FIRST" === a.getFieldValue("END") ? "strpos" : "strrpos", c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "FIND", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''", d = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''";
        let e = " -1", f = "";
        a.workspace.options.oneBasedIndex && (e = " 0", f = " + 1");
        return [module$exports$Blockly$PHP.phpGenerator.provideFunction_("FIRST" === a.getFieldValue("END") ? "text_indexOf" : "text_lastIndexOf", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($text, $search) {
  $pos = ${b}($text, $search);
  return $pos === false ? ${e} : $pos${f};
}
`) + "(" + d + ", " + c + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.text_charAt = function(a) {
        const b = a.getFieldValue("WHERE") || "FROM_START", c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''";
        switch (b) {
          case "FIRST":
            return ["substr(" + c + ", 0, 1)", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
          case "LAST":
            return ["substr(" + c + ", -1)", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
          case "FROM_START":
            return a = module$exports$Blockly$PHP.phpGenerator.getAdjusted(
              a,
              "AT"
            ), ["substr(" + c + ", " + a + ", 1)", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
          case "FROM_END":
            return a = module$exports$Blockly$PHP.phpGenerator.getAdjusted(a, "AT", 1, true), ["substr(" + c + ", " + a + ", 1)", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
          case "RANDOM":
            return [module$exports$Blockly$PHP.phpGenerator.provideFunction_("text_random_letter", `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($text) {
  return $text[rand(0, strlen($text) - 1)];
}
`) + "(" + c + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
        }
        throw Error("Unhandled option (text_charAt).");
      };
      module$exports$Blockly$PHP.phpGenerator.text_getSubstring = function(a) {
        const b = a.getFieldValue("WHERE1"), c = a.getFieldValue("WHERE2"), d = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "STRING", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''";
        if ("FIRST" === b && "LAST" === c) return [d, module$exports$Blockly$PHP.phpGenerator.ORDER_NONE];
        const e = module$exports$Blockly$PHP.phpGenerator.getAdjusted(a, "AT1");
        a = module$exports$Blockly$PHP.phpGenerator.getAdjusted(a, "AT2");
        return [module$exports$Blockly$PHP.phpGenerator.provideFunction_(
          "text_get_substring",
          `
function ${module$exports$Blockly$PHP.phpGenerator.FUNCTION_NAME_PLACEHOLDER_}($text, $where1, $at1, $where2, $at2) {
  if ($where1 == 'FROM_END') {
    $at1 = strlen($text) - 1 - $at1;
  } else if ($where1 == 'FIRST') {
    $at1 = 0;
  } else if ($where1 != 'FROM_START') {
    throw new Exception('Unhandled option (text_get_substring).');
  }
  $length = 0;
  if ($where2 == 'FROM_START') {
    $length = $at2 - $at1 + 1;
  } else if ($where2 == 'FROM_END') {
    $length = strlen($text) - $at1 - $at2;
  } else if ($where2 == 'LAST') {
    $length = strlen($text) - $at1;
  } else {
    throw new Exception('Unhandled option (text_get_substring).');
  }
  return substr($text, $at1, $length);
}
`
        ) + "(" + d + ", '" + b + "', " + e + ", '" + c + "', " + a + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.text_changeCase = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "TEXT", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''";
        let c;
        "UPPERCASE" === a.getFieldValue("CASE") ? c = "strtoupper(" + b + ")" : "LOWERCASE" === a.getFieldValue("CASE") ? c = "strtolower(" + b + ")" : "TITLECASE" === a.getFieldValue("CASE") && (c = "ucwords(strtolower(" + b + "))");
        return [c, module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.text_trim = function(a) {
        const b = { LEFT: "ltrim", RIGHT: "rtrim", BOTH: "trim" }[a.getFieldValue("MODE")];
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "TEXT", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''";
        return [b + "(" + a + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.text_print = function(a) {
        return "print(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "TEXT", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''") + ");\n";
      };
      module$exports$Blockly$PHP.phpGenerator.text_prompt_ext = function(a) {
        let b = "readline(" + (a.getField("TEXT") ? module$exports$Blockly$PHP.phpGenerator.quote_(a.getFieldValue("TEXT")) : module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "TEXT", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''") + ")";
        "NUMBER" === a.getFieldValue("TYPE") && (b = "floatval(" + b + ")");
        return [b, module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.text_prompt = module$exports$Blockly$PHP.phpGenerator.text_prompt_ext;
      module$exports$Blockly$PHP.phpGenerator.text_count = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "TEXT", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''";
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "SUB", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''";
        return ["strlen(" + a + ") === 0 ? strlen(" + b + ") + 1 : substr_count(" + b + ", " + a + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_CONDITIONAL];
      };
      module$exports$Blockly$PHP.phpGenerator.text_replace = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "TEXT", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''", c = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "FROM", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''";
        a = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "TO", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''";
        return ["str_replace(" + c + ", " + a + ", " + b + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$PHP.phpGenerator.text_reverse = function(a) {
        return ["strrev(" + (module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "TEXT", module$exports$Blockly$PHP.phpGenerator.ORDER_NONE) || "''") + ")", module$exports$Blockly$PHP.phpGenerator.ORDER_FUNCTION_CALL];
      };
      var module$exports$Blockly$PHP$variables = {}, module$contents$Blockly$PHP$variables_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$PHP.phpGenerator.variables_get = function(a) {
        return [module$exports$Blockly$PHP.phpGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE), module$exports$Blockly$PHP.phpGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$PHP.phpGenerator.variables_set = function(a) {
        const b = module$exports$Blockly$PHP.phpGenerator.valueToCode(a, "VALUE", module$exports$Blockly$PHP.phpGenerator.ORDER_ASSIGNMENT) || "0";
        return module$exports$Blockly$PHP.phpGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE) + " = " + b + ";\n";
      };
      var module$exports$Blockly$PHP$variablesDynamic = {};
      module$exports$Blockly$PHP.phpGenerator.variables_get_dynamic = module$exports$Blockly$PHP.phpGenerator.variables_get;
      module$exports$Blockly$PHP.phpGenerator.variables_set_dynamic = module$exports$Blockly$PHP.phpGenerator.variables_set;
      var module$exports$Blockly$PHP$all = module$exports$Blockly$PHP;
      module$exports$Blockly$PHP.__namespace__ = $;
      return module$exports$Blockly$PHP;
    });
  }
});

// node_modules/blockly/php.js
var require_php = __commonJS({
  "node_modules/blockly/php.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./php_compressed.js"], factory);
      } else if (typeof exports === "object") {
        module.exports = factory(require_core_browser(), require_php_compressed());
      } else {
        root.BlocklyPHP = factory(root.Blockly, root.BlocklyPHP);
      }
    })(exports, function(Blockly2, BlocklyPHP) {
      return BlocklyPHP;
    });
  }
});

// node_modules/blockly/python_compressed.js
var require_python_compressed = __commonJS({
  "node_modules/blockly/python_compressed.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(["./blockly_compressed.js"], factory);
      } else if (typeof exports === "object") {
        module.exports = factory(require_blockly_compressed());
      } else {
        var factoryExports = factory(root.Blockly);
        root.Blockly.Python = factoryExports.pythonGenerator;
        root.Blockly.Python.__namespace__ = factoryExports.__namespace__;
      }
    })(exports, function(__parent__) {
      var $ = __parent__.__namespace__;
      var module$exports$Blockly$Python = {}, module$contents$Blockly$Python_stringUtils = $.module$build$src$core$utils$string, module$contents$Blockly$Python_Variables = $.module$build$src$core$variables, module$contents$Blockly$Python_CodeGenerator = $.CodeGenerator$$module$build$src$core$generator, module$contents$Blockly$Python_inputTypes = $.module$build$src$core$input_types.inputTypes, module$contents$Blockly$Python_Names = $.module$build$src$core$names.Names, module$contents$Blockly$Python_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Python.pythonGenerator = new $.CodeGenerator$$module$build$src$core$generator("Python");
      module$exports$Blockly$Python.pythonGenerator.addReservedWords("False,None,True,and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,nonlocal,not,or,pass,print,raise,return,try,while,with,yield,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,ArithmeticError,AssertionError,AttributeError,BaseException,BlockingIOError,BrokenPipeError,BufferError,BytesWarning,ChildProcessError,ConnectionAbortedError,ConnectionError,ConnectionRefusedError,ConnectionResetError,DeprecationWarning,EOFError,Ellipsis,EnvironmentError,Exception,FileExistsError,FileNotFoundError,FloatingPointError,FutureWarning,GeneratorExit,IOError,ImportError,ImportWarning,IndentationError,IndexError,InterruptedError,IsADirectoryError,KeyError,KeyboardInterrupt,LookupError,MemoryError,ModuleNotFoundError,NameError,NotADirectoryError,NotImplemented,NotImplementedError,OSError,OverflowError,PendingDeprecationWarning,PermissionError,ProcessLookupError,RecursionError,ReferenceError,ResourceWarning,RuntimeError,RuntimeWarning,StandardError,StopAsyncIteration,StopIteration,SyntaxError,SyntaxWarning,SystemError,SystemExit,TabError,TimeoutError,TypeError,UnboundLocalError,UnicodeDecodeError,UnicodeEncodeError,UnicodeError,UnicodeTranslateError,UnicodeWarning,UserWarning,ValueError,Warning,ZeroDivisionError,_,__build_class__,__debug__,__doc__,__import__,__loader__,__name__,__package__,__spec__,abs,all,any,apply,ascii,basestring,bin,bool,buffer,bytearray,bytes,callable,chr,classmethod,cmp,coerce,compile,complex,copyright,credits,delattr,dict,dir,divmod,enumerate,eval,exec,execfile,exit,file,filter,float,format,frozenset,getattr,globals,hasattr,hash,help,hex,id,input,int,intern,isinstance,issubclass,iter,len,license,list,locals,long,map,max,memoryview,min,next,object,oct,open,ord,pow,print,property,quit,range,raw_input,reduce,reload,repr,reversed,round,set,setattr,slice,sorted,staticmethod,str,sum,super,tuple,type,unichr,unicode,vars,xrange,zip");
      module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC = 0;
      module$exports$Blockly$Python.pythonGenerator.ORDER_COLLECTION = 1;
      module$exports$Blockly$Python.pythonGenerator.ORDER_STRING_CONVERSION = 1;
      module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER = 2.1;
      module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL = 2.2;
      module$exports$Blockly$Python.pythonGenerator.ORDER_EXPONENTIATION = 3;
      module$exports$Blockly$Python.pythonGenerator.ORDER_UNARY_SIGN = 4;
      module$exports$Blockly$Python.pythonGenerator.ORDER_BITWISE_NOT = 4;
      module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE = 5;
      module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE = 6;
      module$exports$Blockly$Python.pythonGenerator.ORDER_BITWISE_SHIFT = 7;
      module$exports$Blockly$Python.pythonGenerator.ORDER_BITWISE_AND = 8;
      module$exports$Blockly$Python.pythonGenerator.ORDER_BITWISE_XOR = 9;
      module$exports$Blockly$Python.pythonGenerator.ORDER_BITWISE_OR = 10;
      module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL = 11;
      module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT = 12;
      module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_AND = 13;
      module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_OR = 14;
      module$exports$Blockly$Python.pythonGenerator.ORDER_CONDITIONAL = 15;
      module$exports$Blockly$Python.pythonGenerator.ORDER_LAMBDA = 16;
      module$exports$Blockly$Python.pythonGenerator.ORDER_NONE = 99;
      module$exports$Blockly$Python.pythonGenerator.ORDER_OVERRIDES = [[module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL, module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER], [module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL], [module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER, module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER], [
        module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER,
        module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL
      ], [module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT, module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT], [module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_AND, module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_AND], [module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_OR, module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_OR]];
      module$exports$Blockly$Python.pythonGenerator.isInitialized = false;
      module$exports$Blockly$Python.pythonGenerator.init = function(a) {
        Object.getPrototypeOf(this).init.call(this);
        this.PASS = this.INDENT + "pass\n";
        this.nameDB_ ? this.nameDB_.reset() : this.nameDB_ = new $.module$build$src$core$names.Names(this.RESERVED_WORDS_);
        this.nameDB_.setVariableMap(a.getVariableMap());
        this.nameDB_.populateVariables(a);
        this.nameDB_.populateProcedures(a);
        const b = [];
        var c = $.module$build$src$core$variables.allDeveloperVariables(a);
        for (let d = 0; d < c.length; d++) b.push(this.nameDB_.getName(c[d], $.module$build$src$core$names.Names.DEVELOPER_VARIABLE_TYPE) + " = None");
        a = $.module$build$src$core$variables.allUsedVarModels(a);
        for (c = 0; c < a.length; c++) b.push(this.nameDB_.getName(a[c].getId(), $.NameType$$module$build$src$core$names.VARIABLE) + " = None");
        this.definitions_.variables = b.join("\n");
        this.isInitialized = true;
      };
      module$exports$Blockly$Python.pythonGenerator.finish = function(a) {
        const b = [], c = [];
        for (let d in this.definitions_) {
          const e = this.definitions_[d];
          e.match(/^(from\s+\S+\s+)?import\s+\S+/) ? b.push(e) : c.push(e);
        }
        a = Object.getPrototypeOf(this).finish.call(this, a);
        this.isInitialized = false;
        this.nameDB_.reset();
        return (b.join("\n") + "\n\n" + c.join("\n\n")).replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n\n\n") + a;
      };
      module$exports$Blockly$Python.pythonGenerator.scrubNakedValue = function(a) {
        return a + "\n";
      };
      module$exports$Blockly$Python.pythonGenerator.quote_ = function(a) {
        a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n");
        let b = "'";
        -1 !== a.indexOf("'") && (-1 === a.indexOf('"') ? b = '"' : a = a.replace(/'/g, "\\'"));
        return b + a + b;
      };
      module$exports$Blockly$Python.pythonGenerator.multiline_quote_ = function(a) {
        return a.split(/\n/g).map(this.quote_).join(" + '\\n' + \n");
      };
      module$exports$Blockly$Python.pythonGenerator.scrub_ = function(a, b, c) {
        let d = "";
        if (!a.outputConnection || !a.outputConnection.targetConnection) {
          var e = a.getCommentText();
          e && (e = $.module$build$src$core$utils$string.wrap(e, this.COMMENT_WRAP - 3), d += this.prefixLines(e + "\n", "# "));
          for (let f = 0; f < a.inputList.length; f++) a.inputList[f].type === $.module$build$src$core$input_types.inputTypes.VALUE && (e = a.inputList[f].connection.targetBlock()) && (e = this.allNestedComments(e)) && (d += this.prefixLines(e, "# "));
        }
        a = a.nextConnection && a.nextConnection.targetBlock();
        c = c ? "" : this.blockToCode(a);
        return d + b + c;
      };
      module$exports$Blockly$Python.pythonGenerator.getAdjustedInt = function(a, b, c, d) {
        c = c || 0;
        a.workspace.options.oneBasedIndex && c--;
        const e = a.workspace.options.oneBasedIndex ? "1" : "0";
        a = this.valueToCode(a, b, c ? this.ORDER_ADDITIVE : this.ORDER_NONE) || e;
        $.module$build$src$core$utils$string.isNumber(a) ? (a = parseInt(a, 10) + c, d && (a = -a)) : (a = 0 < c ? "int(" + a + " + " + c + ")" : 0 > c ? "int(" + a + " - " + -c + ")" : "int(" + a + ")", d && (a = "-" + a));
        return a;
      };
      var module$exports$Blockly$Python$colour = {};
      module$exports$Blockly$Python.pythonGenerator.colour_picker = function(a) {
        return [module$exports$Blockly$Python.pythonGenerator.quote_(a.getFieldValue("COLOUR")), module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Python.pythonGenerator.colour_random = function(a) {
        module$exports$Blockly$Python.pythonGenerator.definitions_.import_random = "import random";
        return ["'#%06x' % random.randint(0, 2**24 - 1)", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.colour_rgb = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.provideFunction_("colour_rgb", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(r, g, b):
  r = round(min(100, max(0, r)) * 2.55)
  g = round(min(100, max(0, g)) * 2.55)
  b = round(min(100, max(0, b)) * 2.55)
  return '#%02x%02x%02x' % (r, g, b)
`), c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "RED", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || 0, d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "GREEN", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || 0;
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "BLUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || 0;
        return [b + "(" + c + ", " + d + ", " + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.colour_blend = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.provideFunction_("colour_blend", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(colour1, colour2, ratio):
  r1, r2 = int(colour1[1:3], 16), int(colour2[1:3], 16)
  g1, g2 = int(colour1[3:5], 16), int(colour2[3:5], 16)
  b1, b2 = int(colour1[5:7], 16), int(colour2[5:7], 16)
  ratio = min(1, max(0, ratio))
  r = round(r1 * (1 - ratio) + r2 * ratio)
  g = round(g1 * (1 - ratio) + g2 * ratio)
  b = round(b1 * (1 - ratio) + b2 * ratio)
  return '#%02x%02x%02x' % (r, g, b)
`), c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "COLOUR1", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "'#000000'", d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "COLOUR2", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "'#000000'";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "RATIO", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || 0;
        return [b + "(" + c + ", " + d + ", " + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      var module$exports$Blockly$Python$lists = {}, module$contents$Blockly$Python$lists_stringUtils = $.module$build$src$core$utils$string, module$contents$Blockly$Python$lists_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Python.pythonGenerator.lists_create_empty = function(a) {
        return ["[]", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Python.pythonGenerator.lists_create_with = function(a) {
        const b = Array(a.itemCount_);
        for (let c = 0; c < a.itemCount_; c++) b[c] = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ADD" + c, module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "None";
        return ["[" + b.join(", ") + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Python.pythonGenerator.lists_repeat = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ITEM", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "None";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "NUM", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE) || "0";
        return ["[" + b + "] * " + a, module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE];
      };
      module$exports$Blockly$Python.pythonGenerator.lists_length = function(a) {
        return ["len(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "[]") + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.lists_isEmpty = function(a) {
        return ["not len(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "[]") + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT];
      };
      module$exports$Blockly$Python.pythonGenerator.lists_indexOf = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "FIND", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "[]", c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        let d = " -1", e = "", f = " - 1";
        a.workspace.options.oneBasedIndex && (d = " 0", e = " + 1", f = "");
        return [("FIRST" === a.getFieldValue("END") ? module$exports$Blockly$Python.pythonGenerator.provideFunction_(
          "first_index",
          `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(my_list, elem):
  try: index = my_list.index(elem)${e}
  except: index =${d}
  return index
`
        ) : module$exports$Blockly$Python.pythonGenerator.provideFunction_("last_index", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(my_list, elem):
  try: index = len(my_list) - my_list[::-1].index(elem)${f}
  except: index =${d}
  return index
`)) + "(" + c + ", " + b + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.lists_getIndex = function(a) {
        const b = a.getFieldValue("MODE") || "GET", c = a.getFieldValue("WHERE") || "FROM_START";
        var d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", "RANDOM" === c ? module$exports$Blockly$Python.pythonGenerator.ORDER_NONE : module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "[]";
        switch (c) {
          case "FIRST":
            if ("GET" === b) return [d + "[0]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
            if ("GET_REMOVE" === b) return [d + ".pop(0)", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
            if ("REMOVE" === b) return d + ".pop(0)\n";
            break;
          case "LAST":
            if ("GET" === b) return [d + "[-1]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
            if ("GET_REMOVE" === b) return [d + ".pop()", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
            if ("REMOVE" === b) return d + ".pop()\n";
            break;
          case "FROM_START":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT");
            if ("GET" === b) return [d + "[" + a + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
            if ("GET_REMOVE" === b) return [d + ".pop(" + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
            if ("REMOVE" === b) return d + ".pop(" + a + ")\n";
            break;
          case "FROM_END":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT", 1, true);
            if ("GET" === b) return [d + "[" + a + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
            if ("GET_REMOVE" === b) return [d + ".pop(" + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
            if ("REMOVE" === b) return d + ".pop(" + a + ")\n";
            break;
          case "RANDOM":
            module$exports$Blockly$Python.pythonGenerator.definitions_.import_random = "import random";
            if ("GET" === b) return ["random.choice(" + d + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
            d = module$exports$Blockly$Python.pythonGenerator.provideFunction_("lists_remove_random_item", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(myList):
  x = int(random.random() * len(myList))
  return myList.pop(x)
`) + "(" + d + ")";
            if ("GET_REMOVE" === b) return [d, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
            if ("REMOVE" === b) return d + "\n";
        }
        throw Error("Unhandled combination (lists_getIndex).");
      };
      module$exports$Blockly$Python.pythonGenerator.lists_setIndex = function(a) {
        let b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LIST", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "[]";
        const c = a.getFieldValue("MODE") || "GET";
        var d = a.getFieldValue("WHERE") || "FROM_START";
        const e = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TO", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "None";
        switch (d) {
          case "FIRST":
            if ("SET" === c) return b + "[0] = " + e + "\n";
            if ("INSERT" === c) return b + ".insert(0, " + e + ")\n";
            break;
          case "LAST":
            if ("SET" === c) return b + "[-1] = " + e + "\n";
            if ("INSERT" === c) return b + ".append(" + e + ")\n";
            break;
          case "FROM_START":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT");
            if ("SET" === c) return b + "[" + a + "] = " + e + "\n";
            if ("INSERT" === c) return b + ".insert(" + a + ", " + e + ")\n";
            break;
          case "FROM_END":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT", 1, true);
            if ("SET" === c) return b + "[" + a + "] = " + e + "\n";
            if ("INSERT" === c) return b + ".insert(" + a + ", " + e + ")\n";
            break;
          case "RANDOM":
            module$exports$Blockly$Python.pythonGenerator.definitions_.import_random = "import random";
            b.match(/^\w+$/) ? a = "" : (a = module$exports$Blockly$Python.pythonGenerator.nameDB_.getDistinctName("tmp_list", $.NameType$$module$build$src$core$names.VARIABLE), d = a + " = " + b + "\n", b = a, a = d);
            d = module$exports$Blockly$Python.pythonGenerator.nameDB_.getDistinctName("tmp_x", $.NameType$$module$build$src$core$names.VARIABLE);
            a += d + " = int(random.random() * len(" + b + "))\n";
            if ("SET" === c) return a + (b + "[" + d + "] = " + e + "\n");
            if ("INSERT" === c) return a + (b + ".insert(" + d + ", " + e + ")\n");
        }
        throw Error("Unhandled combination (lists_setIndex).");
      };
      module$exports$Blockly$Python.pythonGenerator.lists_getSublist = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LIST", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "[]";
        var c = a.getFieldValue("WHERE1");
        const d = a.getFieldValue("WHERE2");
        switch (c) {
          case "FROM_START":
            c = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT1");
            0 === c && (c = "");
            break;
          case "FROM_END":
            c = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT1", 1, true);
            break;
          case "FIRST":
            c = "";
            break;
          default:
            throw Error("Unhandled option (lists_getSublist)");
        }
        switch (d) {
          case "FROM_START":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT2", 1);
            break;
          case "FROM_END":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT2", 0, true);
            $.module$build$src$core$utils$string.isNumber(String(a)) ? 0 === a && (a = "") : (module$exports$Blockly$Python.pythonGenerator.definitions_.import_sys = "import sys", a += " or sys.maxsize");
            break;
          case "LAST":
            a = "";
            break;
          default:
            throw Error("Unhandled option (lists_getSublist)");
        }
        return [b + "[" + c + " : " + a + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
      };
      module$exports$Blockly$Python.pythonGenerator.lists_sort = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LIST", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "[]", c = a.getFieldValue("TYPE");
        a = "1" === a.getFieldValue("DIRECTION") ? "False" : "True";
        return [module$exports$Blockly$Python.pythonGenerator.provideFunction_("lists_sort", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(my_list, type, reverse):
  def try_float(s):
    try:
      return float(s)
    except:
      return 0
  key_funcs = {
    "NUMERIC": try_float,
    "TEXT": str,
    "IGNORE_CASE": lambda s: str(s).lower()
  }
  key_func = key_funcs[type]
  list_cpy = list(my_list)
  return sorted(list_cpy, key=key_func, reverse=reverse)
`) + "(" + b + ', "' + c + '", ' + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.lists_split = function(a) {
        var b = a.getFieldValue("MODE");
        if ("SPLIT" === b) b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "INPUT", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''", a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "DELIM", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE), a = b + ".split(" + a + ")";
        else if ("JOIN" === b) b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "INPUT", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "[]", a = (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "DELIM", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''") + ".join(" + b + ")";
        else throw Error("Unknown mode: " + b);
        return [a, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.lists_reverse = function(a) {
        return ["list(reversed(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LIST", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "[]") + "))", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      var module$exports$Blockly$Python$logic = {};
      module$exports$Blockly$Python.pythonGenerator.controls_if = function(a) {
        let b = 0, c = "", d, e;
        module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX && (c += module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX, a));
        do
          e = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "IF" + b, module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "False", d = module$exports$Blockly$Python.pythonGenerator.statementToCode(a, "DO" + b) || module$exports$Blockly$Python.pythonGenerator.PASS, module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX && (d = module$exports$Blockly$Python.pythonGenerator.prefixLines(module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX, a), module$exports$Blockly$Python.pythonGenerator.INDENT) + d), c += (0 === b ? "if " : "elif ") + e + ":\n" + d, b++;
        while (a.getInput("IF" + b));
        if (a.getInput("ELSE") || module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX) d = module$exports$Blockly$Python.pythonGenerator.statementToCode(
          a,
          "ELSE"
        ) || module$exports$Blockly$Python.pythonGenerator.PASS, module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX && (d = module$exports$Blockly$Python.pythonGenerator.prefixLines(module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX, a), module$exports$Blockly$Python.pythonGenerator.INDENT) + d), c += "else:\n" + d;
        return c;
      };
      module$exports$Blockly$Python.pythonGenerator.controls_ifelse = module$exports$Blockly$Python.pythonGenerator.controls_if;
      module$exports$Blockly$Python.pythonGenerator.logic_compare = function(a) {
        const b = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[a.getFieldValue("OP")], c = module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL, d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "A", c) || "0";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "B", c) || "0";
        return [d + " " + b + " " + a, c];
      };
      module$exports$Blockly$Python.pythonGenerator.logic_operation = function(a) {
        const b = "AND" === a.getFieldValue("OP") ? "and" : "or", c = "and" === b ? module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_AND : module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_OR;
        let d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "A", c);
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "B", c);
        if (d || a) {
          const e = "and" === b ? "True" : "False";
          d || (d = e);
          a || (a = e);
        } else a = d = "False";
        return [
          d + " " + b + " " + a,
          c
        ];
      };
      module$exports$Blockly$Python.pythonGenerator.logic_negate = function(a) {
        return ["not " + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "BOOL", module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT) || "True"), module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT];
      };
      module$exports$Blockly$Python.pythonGenerator.logic_boolean = function(a) {
        return ["TRUE" === a.getFieldValue("BOOL") ? "True" : "False", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Python.pythonGenerator.logic_null = function(a) {
        return ["None", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Python.pythonGenerator.logic_ternary = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "IF", module$exports$Blockly$Python.pythonGenerator.ORDER_CONDITIONAL) || "False", c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "THEN", module$exports$Blockly$Python.pythonGenerator.ORDER_CONDITIONAL) || "None";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ELSE", module$exports$Blockly$Python.pythonGenerator.ORDER_CONDITIONAL) || "None";
        return [c + " if " + b + " else " + a, module$exports$Blockly$Python.pythonGenerator.ORDER_CONDITIONAL];
      };
      var module$exports$Blockly$Python$loops = {}, module$contents$Blockly$Python$loops_stringUtils = $.module$build$src$core$utils$string, module$contents$Blockly$Python$loops_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Python.pythonGenerator.controls_repeat_ext = function(a) {
        let b;
        b = a.getField("TIMES") ? String(parseInt(a.getFieldValue("TIMES"), 10)) : module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TIMES", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        b = $.module$build$src$core$utils$string.isNumber(b) ? parseInt(b, 10) : "int(" + b + ")";
        let c = module$exports$Blockly$Python.pythonGenerator.statementToCode(a, "DO");
        c = module$exports$Blockly$Python.pythonGenerator.addLoopTrap(c, a) || module$exports$Blockly$Python.pythonGenerator.PASS;
        return "for " + module$exports$Blockly$Python.pythonGenerator.nameDB_.getDistinctName("count", $.NameType$$module$build$src$core$names.VARIABLE) + " in range(" + b + "):\n" + c;
      };
      module$exports$Blockly$Python.pythonGenerator.controls_repeat = module$exports$Blockly$Python.pythonGenerator.controls_repeat_ext;
      module$exports$Blockly$Python.pythonGenerator.controls_whileUntil = function(a) {
        const b = "UNTIL" === a.getFieldValue("MODE");
        let c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "BOOL", b ? module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT : module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "False", d = module$exports$Blockly$Python.pythonGenerator.statementToCode(a, "DO");
        d = module$exports$Blockly$Python.pythonGenerator.addLoopTrap(d, a) || module$exports$Blockly$Python.pythonGenerator.PASS;
        b && (c = "not " + c);
        return "while " + c + ":\n" + d;
      };
      module$exports$Blockly$Python.pythonGenerator.controls_for = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE);
        var c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "FROM", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0", d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TO", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0", e = module$exports$Blockly$Python.pythonGenerator.valueToCode(
          a,
          "BY",
          module$exports$Blockly$Python.pythonGenerator.ORDER_NONE
        ) || "1";
        let f = module$exports$Blockly$Python.pythonGenerator.statementToCode(a, "DO");
        f = module$exports$Blockly$Python.pythonGenerator.addLoopTrap(f, a) || module$exports$Blockly$Python.pythonGenerator.PASS;
        let g = "";
        const h = function() {
          return module$exports$Blockly$Python.pythonGenerator.provideFunction_("upRange", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(start, stop, step):
  while start <= stop:
    yield start
    start += abs(step)
`);
        }, k = function() {
          return module$exports$Blockly$Python.pythonGenerator.provideFunction_("downRange", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(start, stop, step):
  while start >= stop:
    yield start
    start -= abs(step)
`);
        };
        a = function(l, m, n) {
          return "(" + l + " <= " + m + ") and " + h() + "(" + l + ", " + m + ", " + n + ") or " + k() + "(" + l + ", " + m + ", " + n + ")";
        };
        if ($.module$build$src$core$utils$string.isNumber(c) && $.module$build$src$core$utils$string.isNumber(d) && $.module$build$src$core$utils$string.isNumber(e)) c = Number(c), d = Number(d), e = Math.abs(Number(e)), 0 === c % 1 && 0 === d % 1 && 0 === e % 1 ? (c <= d ? (d++, a = 0 === c && 1 === e ? d : c + ", " + d, 1 !== e && (a += ", " + e)) : (d--, a = c + ", " + d + ", -" + e), a = "range(" + a + ")") : (a = c < d ? h() : k(), a += "(" + c + ", " + d + ", " + e + ")");
        else {
          const l = function(m, n) {
            $.module$build$src$core$utils$string.isNumber(m) ? m = Number(m) : m.match(/^\w+$/) || (n = module$exports$Blockly$Python.pythonGenerator.nameDB_.getDistinctName(b + n, $.NameType$$module$build$src$core$names.VARIABLE), g += n + " = " + m + "\n", m = n);
            return m;
          };
          c = l(c, "_start");
          d = l(d, "_end");
          e = l(e, "_inc");
          "number" === typeof c && "number" === typeof d ? (a = c < d ? h() : k(), a += "(" + c + ", " + d + ", " + e + ")") : a = a(c, d, e);
        }
        return g += "for " + b + " in " + a + ":\n" + f;
      };
      module$exports$Blockly$Python.pythonGenerator.controls_forEach = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE), c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LIST", module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL) || "[]";
        let d = module$exports$Blockly$Python.pythonGenerator.statementToCode(a, "DO");
        d = module$exports$Blockly$Python.pythonGenerator.addLoopTrap(d, a) || module$exports$Blockly$Python.pythonGenerator.PASS;
        return "for " + b + " in " + c + ":\n" + d;
      };
      module$exports$Blockly$Python.pythonGenerator.controls_flow_statements = function(a) {
        let b = "";
        module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX && (b += module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX, a));
        module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX && (b += module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX, a));
        if (module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX) {
          const c = a.getSurroundLoop();
          c && !c.suppressPrefixSuffix && (b += module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX, c));
        }
        switch (a.getFieldValue("FLOW")) {
          case "BREAK":
            return b + "break\n";
          case "CONTINUE":
            return b + "continue\n";
        }
        throw Error("Unknown flow statement.");
      };
      var module$exports$Blockly$Python$math = {}, module$contents$Blockly$Python$math_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Python.pythonGenerator.addReservedWords("math,random,Number");
      module$exports$Blockly$Python.pythonGenerator.math_number = function(a) {
        a = Number(a.getFieldValue("NUM"));
        let b;
        Infinity === a ? (a = 'float("inf")', b = module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL) : -Infinity === a ? (a = '-float("inf")', b = module$exports$Blockly$Python.pythonGenerator.ORDER_UNARY_SIGN) : b = 0 > a ? module$exports$Blockly$Python.pythonGenerator.ORDER_UNARY_SIGN : module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC;
        return [a, b];
      };
      module$exports$Blockly$Python.pythonGenerator.math_arithmetic = function(a) {
        var b = { ADD: [" + ", module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE], MINUS: [" - ", module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE], MULTIPLY: [" * ", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE], DIVIDE: [" / ", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE], POWER: [" ** ", module$exports$Blockly$Python.pythonGenerator.ORDER_EXPONENTIATION] }[a.getFieldValue("OP")];
        const c = b[0];
        b = b[1];
        const d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "A", b) || "0";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "B", b) || "0";
        return [d + c + a, b];
      };
      module$exports$Blockly$Python.pythonGenerator.math_single = function(a) {
        const b = a.getFieldValue("OP");
        let c;
        if ("NEG" === b) return c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "NUM", module$exports$Blockly$Python.pythonGenerator.ORDER_UNARY_SIGN) || "0", ["-" + c, module$exports$Blockly$Python.pythonGenerator.ORDER_UNARY_SIGN];
        module$exports$Blockly$Python.pythonGenerator.definitions_.import_math = "import math";
        a = "SIN" === b || "COS" === b || "TAN" === b ? module$exports$Blockly$Python.pythonGenerator.valueToCode(
          a,
          "NUM",
          module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE
        ) || "0" : module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "NUM", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        switch (b) {
          case "ABS":
            c = "math.fabs(" + a + ")";
            break;
          case "ROOT":
            c = "math.sqrt(" + a + ")";
            break;
          case "LN":
            c = "math.log(" + a + ")";
            break;
          case "LOG10":
            c = "math.log10(" + a + ")";
            break;
          case "EXP":
            c = "math.exp(" + a + ")";
            break;
          case "POW10":
            c = "math.pow(10," + a + ")";
            break;
          case "ROUND":
            c = "round(" + a + ")";
            break;
          case "ROUNDUP":
            c = "math.ceil(" + a + ")";
            break;
          case "ROUNDDOWN":
            c = "math.floor(" + a + ")";
            break;
          case "SIN":
            c = "math.sin(" + a + " / 180.0 * math.pi)";
            break;
          case "COS":
            c = "math.cos(" + a + " / 180.0 * math.pi)";
            break;
          case "TAN":
            c = "math.tan(" + a + " / 180.0 * math.pi)";
        }
        if (c) return [c, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
        switch (b) {
          case "ASIN":
            c = "math.asin(" + a + ") / math.pi * 180";
            break;
          case "ACOS":
            c = "math.acos(" + a + ") / math.pi * 180";
            break;
          case "ATAN":
            c = "math.atan(" + a + ") / math.pi * 180";
            break;
          default:
            throw Error("Unknown math operator: " + b);
        }
        return [c, module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE];
      };
      module$exports$Blockly$Python.pythonGenerator.math_constant = function(a) {
        const b = {
          PI: ["math.pi", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER],
          E: ["math.e", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER],
          GOLDEN_RATIO: ["(1 + math.sqrt(5)) / 2", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE],
          SQRT2: ["math.sqrt(2)", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER],
          SQRT1_2: ["math.sqrt(1.0 / 2)", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER],
          INFINITY: ["float('inf')", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC]
        };
        a = a.getFieldValue("CONSTANT");
        "INFINITY" !== a && (module$exports$Blockly$Python.pythonGenerator.definitions_.import_math = "import math");
        return b[a];
      };
      module$exports$Blockly$Python.pythonGenerator.math_number_property = function(a) {
        var b = {
          EVEN: [" % 2 == 0", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL],
          ODD: [" % 2 == 1", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL],
          WHOLE: [" % 1 == 0", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL],
          POSITIVE: [" > 0", module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL, module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL],
          NEGATIVE: [" < 0", module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL, module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL],
          DIVISIBLE_BY: [null, module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE, module$exports$Blockly$Python.pythonGenerator.ORDER_RELATIONAL],
          PRIME: [
            null,
            module$exports$Blockly$Python.pythonGenerator.ORDER_NONE,
            module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL
          ]
        };
        const c = a.getFieldValue("PROPERTY"), [d, e, f] = b[c];
        b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "NUMBER_TO_CHECK", e) || "0";
        if ("PRIME" === c) module$exports$Blockly$Python.pythonGenerator.definitions_.import_math = "import math", module$exports$Blockly$Python.pythonGenerator.definitions_.from_numbers_import_Number = "from numbers import Number", a = module$exports$Blockly$Python.pythonGenerator.provideFunction_("math_isPrime", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(n):
  # https://en.wikipedia.org/wiki/Primality_test#Naive_methods
  # If n is not a number but a string, try parsing it.
  if not isinstance(n, Number):
    try:
      n = float(n)
    except:
      return False
  if n == 2 or n == 3:
    return True
  # False if n is negative, is 1, or not whole, or if n is divisible by 2 or 3.
  if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0:
    return False
  # Check all the numbers of form 6k +/- 1, up to sqrt(n).
  for x in range(6, int(math.sqrt(n)) + 2, 6):
    if n % (x - 1) == 0 or n % (x + 1) == 0:
      return False
  return True
`) + "(" + b + ")";
        else if ("DIVISIBLE_BY" === c) {
          a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "DIVISOR", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE) || "0";
          if ("0" === a) return ["False", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC];
          a = b + " % " + a + " == 0";
        } else a = b + d;
        return [a, f];
      };
      module$exports$Blockly$Python.pythonGenerator.math_change = function(a) {
        module$exports$Blockly$Python.pythonGenerator.definitions_.from_numbers_import_Number = "from numbers import Number";
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "DELTA", module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE) || "0";
        a = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE);
        return a + " = (" + a + " if isinstance(" + a + ", Number) else 0) + " + b + "\n";
      };
      module$exports$Blockly$Python.pythonGenerator.math_round = module$exports$Blockly$Python.pythonGenerator.math_single;
      module$exports$Blockly$Python.pythonGenerator.math_trig = module$exports$Blockly$Python.pythonGenerator.math_single;
      module$exports$Blockly$Python.pythonGenerator.math_on_list = function(a) {
        var b = a.getFieldValue("OP");
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LIST", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "[]";
        switch (b) {
          case "SUM":
            b = "sum(" + a + ")";
            break;
          case "MIN":
            b = "min(" + a + ")";
            break;
          case "MAX":
            b = "max(" + a + ")";
            break;
          case "AVERAGE":
            module$exports$Blockly$Python.pythonGenerator.definitions_.from_numbers_import_Number = "from numbers import Number";
            b = module$exports$Blockly$Python.pythonGenerator.provideFunction_(
              "math_mean",
              `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(myList):
  localList = [e for e in myList if isinstance(e, Number)]
  if not localList: return
  return float(sum(localList)) / len(localList)
`
            ) + "(" + a + ")";
            break;
          case "MEDIAN":
            module$exports$Blockly$Python.pythonGenerator.definitions_.from_numbers_import_Number = "from numbers import Number";
            b = module$exports$Blockly$Python.pythonGenerator.provideFunction_("math_median", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(myList):
  localList = sorted([e for e in myList if isinstance(e, Number)])
  if not localList: return
  if len(localList) % 2 == 0:
    return (localList[len(localList) // 2 - 1] + localList[len(localList) // 2]) / 2.0
  else:
    return localList[(len(localList) - 1) // 2]
`) + "(" + a + ")";
            break;
          case "MODE":
            b = module$exports$Blockly$Python.pythonGenerator.provideFunction_("math_modes", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(some_list):
  modes = []
  # Using a lists of [item, count] to keep count rather than dict
  # to avoid "unhashable" errors when the counted item is itself a list or dict.
  counts = []
  maxCount = 1
  for item in some_list:
    found = False
    for count in counts:
      if count[0] == item:
        count[1] += 1
        maxCount = max(maxCount, count[1])
        found = True
    if not found:
      counts.append([item, 1])
  for counted_item, item_count in counts:
    if item_count == maxCount:
      modes.append(counted_item)
  return modes
`) + "(" + a + ")";
            break;
          case "STD_DEV":
            module$exports$Blockly$Python.pythonGenerator.definitions_.import_math = "import math";
            b = module$exports$Blockly$Python.pythonGenerator.provideFunction_("math_standard_deviation", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(numbers):
  n = len(numbers)
  if n == 0: return
  mean = float(sum(numbers)) / n
  variance = sum((x - mean) ** 2 for x in numbers) / n
  return math.sqrt(variance)
`) + "(" + a + ")";
            break;
          case "RANDOM":
            module$exports$Blockly$Python.pythonGenerator.definitions_.import_random = "import random";
            b = "random.choice(" + a + ")";
            break;
          default:
            throw Error("Unknown operator: " + b);
        }
        return [b, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.math_modulo = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "DIVIDEND", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE) || "0";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "DIVISOR", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE) || "0";
        return [b + " % " + a, module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE];
      };
      module$exports$Blockly$Python.pythonGenerator.math_constrain = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0", c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "LOW", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "HIGH", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "float('inf')";
        return ["min(max(" + b + ", " + c + "), " + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.math_random_int = function(a) {
        module$exports$Blockly$Python.pythonGenerator.definitions_.import_random = "import random";
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "FROM", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TO", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        return ["random.randint(" + b + ", " + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.math_random_float = function(a) {
        module$exports$Blockly$Python.pythonGenerator.definitions_.import_random = "import random";
        return ["random.random()", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.math_atan2 = function(a) {
        module$exports$Blockly$Python.pythonGenerator.definitions_.import_math = "import math";
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "X", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        return ["math.atan2(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "Y", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0") + ", " + b + ") / math.pi * 180", module$exports$Blockly$Python.pythonGenerator.ORDER_MULTIPLICATIVE];
      };
      var module$exports$Blockly$Python$procedures = {}, module$contents$Blockly$Python$procedures_Variables = $.module$build$src$core$variables, module$contents$Blockly$Python$procedures_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Python.pythonGenerator.procedures_defreturn = function(a) {
        var b = [], c = a.workspace, d = $.module$build$src$core$variables.allUsedVarModels(c) || [];
        for (let m = 0, n; n = d[m]; m++) {
          var e = n.name;
          -1 === a.getVars().indexOf(e) && b.push(module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(e, $.NameType$$module$build$src$core$names.VARIABLE));
        }
        c = $.module$build$src$core$variables.allDeveloperVariables(c);
        for (d = 0; d < c.length; d++) b.push(module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(
          c[d],
          $.NameType$$module$build$src$core$names.DEVELOPER_VARIABLE
        ));
        c = b.length ? module$exports$Blockly$Python.pythonGenerator.INDENT + "global " + b.join(", ") + "\n" : "";
        b = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("NAME"), $.NameType$$module$build$src$core$names.PROCEDURE);
        d = "";
        module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX && (d += module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_PREFIX, a));
        module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX && (d += module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX, a));
        d && (d = module$exports$Blockly$Python.pythonGenerator.prefixLines(d, module$exports$Blockly$Python.pythonGenerator.INDENT));
        e = "";
        module$exports$Blockly$Python.pythonGenerator.INFINITE_LOOP_TRAP && (e = module$exports$Blockly$Python.pythonGenerator.prefixLines(
          module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.INFINITE_LOOP_TRAP, a),
          module$exports$Blockly$Python.pythonGenerator.INDENT
        ));
        let f = module$exports$Blockly$Python.pythonGenerator.statementToCode(a, "STACK"), g = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "RETURN", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "", h = "";
        f && g && (h = d);
        g ? g = module$exports$Blockly$Python.pythonGenerator.INDENT + "return " + g + "\n" : f || (f = module$exports$Blockly$Python.pythonGenerator.PASS);
        const k = [], l = a.getVars();
        for (let m = 0; m < l.length; m++) k[m] = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(
          l[m],
          $.NameType$$module$build$src$core$names.VARIABLE
        );
        c = "def " + b + "(" + k.join(", ") + "):\n" + c + d + e + f + h + g;
        c = module$exports$Blockly$Python.pythonGenerator.scrub_(a, c);
        module$exports$Blockly$Python.pythonGenerator.definitions_["%" + b] = c;
        return null;
      };
      module$exports$Blockly$Python.pythonGenerator.procedures_defnoreturn = module$exports$Blockly$Python.pythonGenerator.procedures_defreturn;
      module$exports$Blockly$Python.pythonGenerator.procedures_callreturn = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("NAME"), $.NameType$$module$build$src$core$names.PROCEDURE), c = [], d = a.getVars();
        for (let e = 0; e < d.length; e++) c[e] = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ARG" + e, module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "None";
        return [b + "(" + c.join(", ") + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.procedures_callnoreturn = function(a) {
        return module$exports$Blockly$Python.pythonGenerator.procedures_callreturn(a)[0] + "\n";
      };
      module$exports$Blockly$Python.pythonGenerator.procedures_ifreturn = function(a) {
        let b = "if " + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "CONDITION", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "False") + ":\n";
        module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX && (b += module$exports$Blockly$Python.pythonGenerator.prefixLines(module$exports$Blockly$Python.pythonGenerator.injectId(module$exports$Blockly$Python.pythonGenerator.STATEMENT_SUFFIX, a), module$exports$Blockly$Python.pythonGenerator.INDENT));
        a.hasReturnValue_ ? (a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "None", b += module$exports$Blockly$Python.pythonGenerator.INDENT + "return " + a + "\n") : b += module$exports$Blockly$Python.pythonGenerator.INDENT + "return\n";
        return b;
      };
      var module$exports$Blockly$Python$texts = {}, module$contents$Blockly$Python$texts_stringUtils = $.module$build$src$core$utils$string, module$contents$Blockly$Python$texts_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Python.pythonGenerator.text = function(a) {
        return [module$exports$Blockly$Python.pythonGenerator.quote_(a.getFieldValue("TEXT")), module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Python.pythonGenerator.text_multiline = function(a) {
        a = module$exports$Blockly$Python.pythonGenerator.multiline_quote_(a.getFieldValue("TEXT"));
        const b = -1 !== a.indexOf("+") ? module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE : module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC;
        return [a, b];
      };
      var module$contents$Blockly$Python$texts_strRegExp = /^\s*'([^']|\\')*'\s*$/, module$contents$Blockly$Python$texts_forceString = function(a) {
        return module$contents$Blockly$Python$texts_strRegExp.test(a) ? [a, module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC] : ["str(" + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.text_join = function(a) {
        switch (a.itemCount_) {
          case 0:
            return ["''", module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC];
          case 1:
            return a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ADD0", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''", module$contents$Blockly$Python$texts_forceString(a);
          case 2:
            var b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ADD0", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
            a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ADD1", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
            return [module$contents$Blockly$Python$texts_forceString(b)[0] + " + " + module$contents$Blockly$Python$texts_forceString(a)[0], module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE];
          default:
            b = [];
            for (let c = 0; c < a.itemCount_; c++) b[c] = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "ADD" + c, module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
            a = module$exports$Blockly$Python.pythonGenerator.nameDB_.getDistinctName("x", $.NameType$$module$build$src$core$names.VARIABLE);
            return ["''.join([str(" + a + ") for " + a + " in [" + b.join(", ") + "]])", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
        }
      };
      module$exports$Blockly$Python.pythonGenerator.text_append = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE);
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        return b + " = str(" + b + ") + " + module$contents$Blockly$Python$texts_forceString(a)[0] + "\n";
      };
      module$exports$Blockly$Python.pythonGenerator.text_length = function(a) {
        return ["len(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''") + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.text_isEmpty = function(a) {
        return ["not len(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''") + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_LOGICAL_NOT];
      };
      module$exports$Blockly$Python.pythonGenerator.text_indexOf = function(a) {
        var b = "FIRST" === a.getFieldValue("END") ? "find" : "rfind";
        const c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "FIND", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        b = (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''") + "." + b + "(" + c + ")";
        return a.workspace.options.oneBasedIndex ? [b + " + 1", module$exports$Blockly$Python.pythonGenerator.ORDER_ADDITIVE] : [b, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.text_charAt = function(a) {
        const b = a.getFieldValue("WHERE") || "FROM_START", c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", "RANDOM" === b ? module$exports$Blockly$Python.pythonGenerator.ORDER_NONE : module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''";
        switch (b) {
          case "FIRST":
            return [c + "[0]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
          case "LAST":
            return [c + "[-1]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
          case "FROM_START":
            return a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT"), [c + "[" + a + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
          case "FROM_END":
            return a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT", 1, true), [c + "[" + a + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
          case "RANDOM":
            return module$exports$Blockly$Python.pythonGenerator.definitions_.import_random = "import random", [module$exports$Blockly$Python.pythonGenerator.provideFunction_(
              "text_random_letter",
              `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(text):
  x = int(random.random() * len(text))
  return text[x]
`
            ) + "(" + c + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
        }
        throw Error("Unhandled option (text_charAt).");
      };
      module$exports$Blockly$Python.pythonGenerator.text_getSubstring = function(a) {
        var b = a.getFieldValue("WHERE1");
        const c = a.getFieldValue("WHERE2"), d = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "STRING", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''";
        switch (b) {
          case "FROM_START":
            b = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT1");
            0 === b && (b = "");
            break;
          case "FROM_END":
            b = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT1", 1, true);
            break;
          case "FIRST":
            b = "";
            break;
          default:
            throw Error("Unhandled option (text_getSubstring)");
        }
        switch (c) {
          case "FROM_START":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT2", 1);
            break;
          case "FROM_END":
            a = module$exports$Blockly$Python.pythonGenerator.getAdjustedInt(a, "AT2", 0, true);
            $.module$build$src$core$utils$string.isNumber(String(a)) ? 0 === a && (a = "") : (module$exports$Blockly$Python.pythonGenerator.definitions_.import_sys = "import sys", a += " or sys.maxsize");
            break;
          case "LAST":
            a = "";
            break;
          default:
            throw Error("Unhandled option (text_getSubstring)");
        }
        return [d + "[" + b + " : " + a + "]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
      };
      module$exports$Blockly$Python.pythonGenerator.text_changeCase = function(a) {
        const b = { UPPERCASE: ".upper()", LOWERCASE: ".lower()", TITLECASE: ".title()" }[a.getFieldValue("CASE")];
        return [(module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''") + b, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.text_trim = function(a) {
        const b = { LEFT: ".lstrip()", RIGHT: ".rstrip()", BOTH: ".strip()" }[a.getFieldValue("MODE")];
        return [(module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''") + b, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.text_print = function(a) {
        return "print(" + (module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''") + ")\n";
      };
      module$exports$Blockly$Python.pythonGenerator.text_prompt_ext = function(a) {
        var b = module$exports$Blockly$Python.pythonGenerator.provideFunction_("text_prompt", `
def ${module$exports$Blockly$Python.pythonGenerator.FUNCTION_NAME_PLACEHOLDER_}(msg):
  try:
    return raw_input(msg)
  except NameError:
    return input(msg)
`);
        let c;
        c = a.getField("TEXT") ? module$exports$Blockly$Python.pythonGenerator.quote_(a.getFieldValue("TEXT")) : module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        b = b + "(" + c + ")";
        "NUMBER" === a.getFieldValue("TYPE") && (b = "float(" + b + ")");
        return [b, module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.text_prompt = module$exports$Blockly$Python.pythonGenerator.text_prompt_ext;
      module$exports$Blockly$Python.pythonGenerator.text_count = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "SUB", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        return [b + ".count(" + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_FUNCTION_CALL];
      };
      module$exports$Blockly$Python.pythonGenerator.text_replace = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''", c = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "FROM", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        a = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TO", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "''";
        return [b + ".replace(" + c + ", " + a + ")", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
      };
      module$exports$Blockly$Python.pythonGenerator.text_reverse = function(a) {
        return [(module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "TEXT", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER) || "''") + "[::-1]", module$exports$Blockly$Python.pythonGenerator.ORDER_MEMBER];
      };
      var module$exports$Blockly$Python$variables = {}, module$contents$Blockly$Python$variables_NameType = $.NameType$$module$build$src$core$names;
      module$exports$Blockly$Python.pythonGenerator.variables_get = function(a) {
        return [module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE), module$exports$Blockly$Python.pythonGenerator.ORDER_ATOMIC];
      };
      module$exports$Blockly$Python.pythonGenerator.variables_set = function(a) {
        const b = module$exports$Blockly$Python.pythonGenerator.valueToCode(a, "VALUE", module$exports$Blockly$Python.pythonGenerator.ORDER_NONE) || "0";
        return module$exports$Blockly$Python.pythonGenerator.nameDB_.getName(a.getFieldValue("VAR"), $.NameType$$module$build$src$core$names.VARIABLE) + " = " + b + "\n";
      };
      var module$exports$Blockly$Python$variablesDynamic = {};
      module$exports$Blockly$Python.pythonGenerator.variables_get_dynamic = module$exports$Blockly$Python.pythonGenerator.variables_get;
      module$exports$Blockly$Python.pythonGenerator.variables_set_dynamic = module$exports$Blockly$Python.pythonGenerator.variables_set;
      var module$exports$Blockly$Python$all = module$exports$Blockly$Python;
      module$exports$Blockly$Python.__namespace__ = $;
      return module$exports$Blockly$Python;
    });
  }
});

// node_modules/blockly/python.js
var require_python = __commonJS({
  "node_modules/blockly/python.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./python_compressed.js"], factory);
      } else if (typeof exports === "object") {
        module.exports = factory(require_core_browser(), require_python_compressed());
      } else {
        root.BlocklyPython = factory(root.Blockly, root.BlocklyPython);
      }
    })(exports, function(Blockly2, BlocklyPython) {
      return BlocklyPython;
    });
  }
});

// node_modules/angular2-uuid/index.js
var require_angular2_uuid = __commonJS({
  "node_modules/angular2-uuid/index.js"(exports) {
    "use strict";
    var UUID2 = function() {
      function UUID3() {
      }
      UUID3.UUID = function() {
        if (typeof window !== "undefined" && typeof window.crypto !== "undefined" && typeof window.crypto.getRandomValues !== "undefined") {
          var buf = new Uint16Array(8);
          window.crypto.getRandomValues(buf);
          return this.pad4(buf[0]) + this.pad4(buf[1]) + "-" + this.pad4(buf[2]) + "-" + this.pad4(buf[3]) + "-" + this.pad4(buf[4]) + "-" + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]);
        } else {
          return this.random4() + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" + this.random4() + this.random4() + this.random4();
        }
      };
      UUID3.pad4 = function(num) {
        var ret = num.toString(16);
        while (ret.length < 4) {
          ret = "0" + ret;
        }
        return ret;
      };
      UUID3.random4 = function() {
        return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
      };
      return UUID3;
    }();
    exports.UUID = UUID2;
  }
});

// node_modules/ngx-blockly/fesm2020/ngx-blockly.mjs
var Blockly = __toESM(require_core_browser(), 1);
var EN = __toESM(require_en(), 1);
var import_dart = __toESM(require_dart(), 1);
var import_lua = __toESM(require_lua(), 1);
var import_javascript = __toESM(require_javascript(), 1);
var import_php = __toESM(require_php(), 1);
var import_python = __toESM(require_python(), 1);
var import_angular2_uuid = __toESM(require_angular2_uuid(), 1);
var _c0 = ["primaryContainer"];
var _c1 = ["secondaryContainer"];
var NgxBlocklyGenerator;
(function(NgxBlocklyGenerator2) {
  NgxBlocklyGenerator2["DART"] = "Dart";
  NgxBlocklyGenerator2["JAVASCRIPT"] = "JavaScript";
  NgxBlocklyGenerator2["LUA"] = "Lua";
  NgxBlocklyGenerator2["PHP"] = "PHP";
  NgxBlocklyGenerator2["PYTHON"] = "Python";
  NgxBlocklyGenerator2["XML"] = "Xml";
})(NgxBlocklyGenerator || (NgxBlocklyGenerator = {}));
var NgxBlocklyComponent = class _NgxBlocklyComponent {
  constructor() {
    this.config = {};
    this.customBlocks = [];
    this.readOnly = false;
    this.workspaceCreate = new EventEmitter();
    this.workspaceChange = new EventEmitter();
    this.toolboxChange = new EventEmitter();
    this.dartCode = new EventEmitter();
    this.javascriptCode = new EventEmitter();
    this.luaCode = new EventEmitter();
    this.phpCode = new EventEmitter();
    this.pythonCode = new EventEmitter();
    this.xmlCode = new EventEmitter();
    this._finishedLoading = false;
  }
  static initCustomBlocks(blocks) {
    if (blocks) {
      for (const customBlock of blocks) {
        Blockly.Blocks[customBlock.type] = {
          init: function() {
            const block = new customBlock.class(customBlock.type, customBlock.blockMutator, ...customBlock.args);
            block.init(this);
            this.mixin({
              blockInstance: block
            });
          }
        };
        import_python.pythonGenerator[customBlock.type] = function(b) {
          return b.blockInstance.toPythonCode(b);
        };
        import_dart.dartGenerator[customBlock.type] = function(b) {
          return b.blockInstance.toDartCode(b);
        };
        import_javascript.javascriptGenerator[customBlock.type] = function(b) {
          return b.blockInstance.toJavaScriptCode(b);
        };
        import_lua.luaGenerator[customBlock.type] = function(b) {
          return b.blockInstance.toLuaCode(b);
        };
        import_php.phpGenerator[customBlock.type] = function(b) {
          return b.blockInstance.toPHPCode(b);
        };
        if (customBlock.blockMutator) {
          const mutator_mixin = {
            mutationToDom: function() {
              return customBlock.blockMutator.mutationToDom.call(customBlock.blockMutator, this);
            },
            domToMutation: function(xmlElement) {
              customBlock.blockMutator.domToMutation.call(customBlock.blockMutator, this, xmlElement);
            },
            saveExtraState: function() {
              return customBlock.blockMutator.saveExtraState.call(customBlock.blockMutator);
            },
            loadExtraState: function(state) {
              customBlock.blockMutator.loadExtraState.call(customBlock.blockMutator, state);
            }
          };
          if (customBlock.blockMutator.blockList && customBlock.blockMutator.blockList.length > 0) {
            mutator_mixin.decompose = function(workspace) {
              return customBlock.blockMutator.decompose.call(customBlock.blockMutator, this, workspace);
            };
            mutator_mixin.compose = function(topBlock) {
              customBlock.blockMutator.compose.call(customBlock.blockMutator, this, topBlock);
            };
            mutator_mixin.saveConnections = function(containerBlock) {
              customBlock.blockMutator.saveConnections.call(customBlock.blockMutator, this, containerBlock);
            };
          }
          Blockly.Extensions.unregister(customBlock.blockMutator.name);
          Blockly.Extensions.registerMutator(customBlock.blockMutator.name, mutator_mixin, function() {
            customBlock.blockMutator.afterBlockInit.call(customBlock.blockMutator, this);
          }, customBlock.blockMutator.blockList);
        }
      }
    }
  }
  ngOnInit() {
    _NgxBlocklyComponent.initCustomBlocks(this.customBlocks);
  }
  ngAfterViewInit() {
    const readOnly = this.config.readOnly || this.readOnly;
    this.config.readOnly = false;
    this.workspace = Blockly.inject(this.primaryContainer.nativeElement, this.config);
    this.workspace.addChangeListener(this._onWorkspaceChange.bind(this));
    this.workspace.fireChangeListener(new Blockly.Events.FinishedLoading());
    this.workspaceCreate.emit(this.workspace);
    this.resize();
    if (readOnly) {
      this.setReadonly(true);
      this.config.readOnly = true;
    }
  }
  ngOnChanges(changes) {
    if (changes.readOnly && this._secondaryWorkspace) {
      this.setReadonly(changes.readOnly.currentValue);
    }
  }
  ngOnDestroy() {
    if (this.workspace) {
      this.workspace.dispose();
    }
    if (this._secondaryWorkspace) {
      this._secondaryWorkspace.dispose();
    }
  }
  onResize(event) {
    clearTimeout(this._resizeTimeout);
    this._resizeTimeout = setTimeout(() => this.resize(), 200);
  }
  /**
   * Generate code for all blocks in the workspace to the specified output.
   * @param workspaceId Workspace to generate code from.
   */
  workspaceToCode(workspaceId) {
    for (const generator of this.config.generators) {
      switch (generator) {
        case NgxBlocklyGenerator.DART:
          this.dartCode.emit(import_dart.dartGenerator.workspaceToCode(Blockly.Workspace.getById(workspaceId)));
          break;
        case NgxBlocklyGenerator.LUA:
          this.luaCode.emit(import_lua.luaGenerator.workspaceToCode(Blockly.Workspace.getById(workspaceId)));
          break;
        case NgxBlocklyGenerator.JAVASCRIPT:
          this.javascriptCode.emit(import_javascript.javascriptGenerator.workspaceToCode(Blockly.Workspace.getById(workspaceId)));
          break;
        case NgxBlocklyGenerator.PHP:
          this.phpCode.emit(import_php.phpGenerator.workspaceToCode(Blockly.Workspace.getById(workspaceId)));
          break;
        case NgxBlocklyGenerator.PYTHON:
          this.pythonCode.emit(import_python.pythonGenerator.workspaceToCode(Blockly.Workspace.getById(workspaceId)));
          break;
        case NgxBlocklyGenerator.XML:
          this.xmlCode.emit(Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Blockly.Workspace.getById(workspaceId))));
          break;
      }
    }
  }
  /**
   * Converts a DOM structure into properly indented text.
   * @return Text representation.
   */
  toXml() {
    return Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.workspace));
  }
  /**
   * Clear the given workspace then decode an XML DOM and
   * create blocks on the workspace.
   * @param xml XML DOM..
   */
  fromXml(xml) {
    this._finishedLoading = false;
    Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.textToDom(xml), this.workspace);
    if (this._secondaryWorkspace) {
      Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.textToDom(xml), this._secondaryWorkspace);
    }
  }
  /**
   * Decode an XML DOM and create blocks on the workspace. Position the new
   * blocks immediately below prior blocks, aligned by their starting edge.
   * @param xml The XML DOM.
   */
  appendFromXml(xml) {
    Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(xml), this.workspace);
    if (this._secondaryWorkspace) {
      Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(xml), this._secondaryWorkspace);
    }
  }
  /**
   * Dispose of all blocks in workspace, with an optimization to prevent resizes.
   */
  clear() {
    if (this.workspace) {
      this.workspace.clear();
    }
  }
  /**
   * Clear the undo/redo stacks.
   */
  clearUndo() {
    if (this.workspace) {
      this.workspace.clearUndo();
    }
  }
  /**
   * Clear the reference to the current gesture.
   */
  clearGesture() {
    if (this.workspace) {
      this.workspace.clearGesture();
    }
  }
  /**
   * Clear search input and result set.
   */
  clearSearch() {
    if (this.workspace) {
      const toolbox = this.workspace.getToolbox();
      if (toolbox && typeof toolbox.clearSearch === "function") {
        toolbox.clearSearch();
      }
    }
  }
  /**
   * Size the workspace when the contents change. This also updates
   * scrollbars accordingly.
   */
  resize() {
    if (this.workspace) {
      Blockly.svgResize(this.workspace);
    }
    if (this._secondaryWorkspace) {
      Blockly.svgResize(this._secondaryWorkspace);
    }
  }
  setReadonly(readOnly) {
    this.readOnly = readOnly;
    if (readOnly) {
      this.secondaryContainer.nativeElement.classList.remove("hidden");
      if (!this._secondaryWorkspace) {
        const config = __spreadValues({}, this.config);
        config.readOnly = true;
        this._secondaryWorkspace = Blockly.inject(this.secondaryContainer.nativeElement, config);
      }
      Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.textToDom(this.toXml()), this._secondaryWorkspace);
      Blockly.svgResize(this._secondaryWorkspace);
    } else {
      if (this._secondaryWorkspace) {
        this.secondaryContainer.nativeElement.classList.add("hidden");
      }
    }
  }
  highlightBlock(blockId) {
    if (this.workspace) {
      this.workspace.highlightBlock(blockId);
    }
    if (this._secondaryWorkspace) {
      this._secondaryWorkspace.highlightBlock(blockId);
    }
  }
  _onWorkspaceChange(event) {
    this.workspaceChange.emit(event);
    if (event.type === Blockly.Events.FINISHED_LOADING) {
      this._finishedLoading = true;
    }
    if (this._finishedLoading) {
      if (event instanceof Blockly.Events.BlockBase || event instanceof Blockly.Events.VarBase || event instanceof Blockly.Events.CommentBase) {
        this.workspaceToCode(event.workspaceId);
      }
      if (event.type === Blockly.Events.TOOLBOX_ITEM_SELECT) {
        this.toolboxChange.emit(event);
      }
    }
  }
};
NgxBlocklyComponent.ɵfac = function NgxBlocklyComponent_Factory(t) {
  return new (t || NgxBlocklyComponent)();
};
NgxBlocklyComponent.ɵcmp = ɵɵdefineComponent({
  type: NgxBlocklyComponent,
  selectors: [["ngx-blockly"]],
  viewQuery: function NgxBlocklyComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.primaryContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.secondaryContainer = _t.first);
    }
  },
  hostBindings: function NgxBlocklyComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("resize", function NgxBlocklyComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, ɵɵresolveWindow);
    }
  },
  inputs: {
    config: "config",
    customBlocks: "customBlocks",
    readOnly: "readOnly"
  },
  outputs: {
    workspaceCreate: "workspaceCreate",
    workspaceChange: "workspaceChange",
    toolboxChange: "toolboxChange",
    dartCode: "dartCode",
    javascriptCode: "javascriptCode",
    luaCode: "luaCode",
    phpCode: "phpCode",
    pythonCode: "pythonCode",
    xmlCode: "xmlCode"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 5,
  vars: 0,
  consts: [["primaryContainer", ""], ["secondaryContainer", ""], ["id", "blockly-wrapper", 1, "blockly-wrapper"], [1, "blockly"], [1, "blockly", "hidden"]],
  template: function NgxBlocklyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 2);
      ɵɵelement(1, "div", 3, 0)(3, "div", 4, 1);
      ɵɵelementEnd();
    }
  },
  styles: [".blockly-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.blockly[_ngcontent-%COMP%]{position:absolute;width:100%;min-width:100%;height:100%;min-height:100%}.blockly[_ngcontent-%COMP%]{z-index:1}.blockly.hidden[_ngcontent-%COMP%]{display:none;z-index:0}  .blockly .blocklyToolboxDiv{display:flex;flex-direction:column;justify-content:flex-start;overflow:auto}  .blockly .blocklyToolboxDiv .blocklyTreeRoot{overflow-x:visible;overflow-y:auto;flex:1}  .blockly .blocklyToolboxDiv input.searchbar{border:none;background-color:transparent;font-size:16px;padding:8px 25px 4px;border-bottom:1px solid #ccc;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6Ii8+PC9zdmc+) no-repeat right center;min-width:120px}  .blockly .blocklyToolboxDiv input.searchbar:focus{outline:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxBlocklyComponent, [{
    type: Component,
    args: [{
      selector: "ngx-blockly",
      template: '<div id="blockly-wrapper" class="blockly-wrapper">\n    <div #primaryContainer class="blockly"></div>\n    <div #secondaryContainer class="blockly hidden"></div>\n</div>\n',
      styles: [".blockly-wrapper{width:100%;height:100%}.blockly{position:absolute;width:100%;min-width:100%;height:100%;min-height:100%}.blockly{z-index:1}.blockly.hidden{display:none;z-index:0}::ng-deep .blockly .blocklyToolboxDiv{display:flex;flex-direction:column;justify-content:flex-start;overflow:auto}::ng-deep .blockly .blocklyToolboxDiv .blocklyTreeRoot{overflow-x:visible;overflow-y:auto;flex:1}::ng-deep .blockly .blocklyToolboxDiv input.searchbar{border:none;background-color:transparent;font-size:16px;padding:8px 25px 4px;border-bottom:1px solid #ccc;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6Ii8+PC9zdmc+) no-repeat right center;min-width:120px}::ng-deep .blockly .blocklyToolboxDiv input.searchbar:focus{outline:none}\n"]
    }]
  }], null, {
    config: [{
      type: Input
    }],
    customBlocks: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    workspaceCreate: [{
      type: Output
    }],
    workspaceChange: [{
      type: Output
    }],
    toolboxChange: [{
      type: Output
    }],
    dartCode: [{
      type: Output
    }],
    javascriptCode: [{
      type: Output
    }],
    luaCode: [{
      type: Output
    }],
    phpCode: [{
      type: Output
    }],
    pythonCode: [{
      type: Output
    }],
    xmlCode: [{
      type: Output
    }],
    primaryContainer: [{
      type: ViewChild,
      args: ["primaryContainer"]
    }],
    secondaryContainer: [{
      type: ViewChild,
      args: ["secondaryContainer"]
    }],
    onResize: [{
      type: HostListener,
      args: ["window:resize", ["$event"]]
    }]
  });
})();
var NgxBlocklyGeneratorConfig = class {
};
var Block = class {
  constructor(type) {
    this.kind = "BLOCK";
    this._disabled = false;
    this._type = type;
  }
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value;
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  get class() {
    return this._class;
  }
  set class(value) {
    this._class = value;
  }
};
var CustomBlock = class extends Block {
  constructor(type, blockMutator, ...args) {
    super(type);
    this._blockMutator = blockMutator ? blockMutator : null;
    this._args = args;
  }
  init(block) {
    this._block = block;
    this.defineBlock();
    this.block.setOnChange(function(event) {
      this.blockInstance.onChange(event);
    });
  }
  onChange(changeEvent) {
  }
  toXML() {
    return `<block type="${this.type}" disabled="${this.disabled}"></block>`;
  }
  toDartCode(block) {
    return "Not implemented";
  }
  toJavaScriptCode(block) {
    return "Not implemented";
  }
  toLuaCode(block) {
    return "Not implemented";
  }
  toPHPCode(block) {
    return "Not implemented";
  }
  toPythonCode(block) {
    return "Not implemented";
  }
  get block() {
    return this._block;
  }
  set block(block) {
    this._block = block;
  }
  get blockMutator() {
    return this._blockMutator;
  }
  set blockMutator(mutator) {
    this._blockMutator = mutator;
  }
  get args() {
    return this._args;
  }
  set args(args) {
    this._args = args;
  }
};
var XmlBlock = class extends Block {
  constructor(type, shadow = false) {
    super(type);
    this._values = [];
    this._shadow = shadow;
  }
  get values() {
    return this._values;
  }
  set values(value) {
    this._values = value;
  }
  get field() {
    return this._field;
  }
  set field(value) {
    this._field = value;
  }
  get mutation() {
    return this._mutation;
  }
  set mutation(mutation) {
    this._mutation = mutation;
  }
  toXML() {
    const tagName = this._shadow ? "shadow" : "block";
    let xml = `<${tagName} type="${this.type}" disabled="${this.disabled}">`;
    for (const value of this.values) {
      xml += value.toXML();
    }
    xml += this.field ? this.field.toXML() : "";
    if (this._mutation) {
      xml += this._mutation.toXML();
    }
    xml += `</${tagName}>`;
    return xml;
  }
};
var Value = class {
  constructor(name, block) {
    this._name = name;
    this._block = block;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get block() {
    return this._block;
  }
  set block(value) {
    this._block = value;
  }
  toXML() {
    return `<value name="${this.name}">` + this.block.toXML() + "</value>";
  }
};
var Field = class {
  constructor(name, value) {
    this._name = name;
    this._value = value;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
  toXML() {
    return `<field name="${this.name}">` + this.value + "</field>";
  }
};
var Mutation = class {
  constructor(name, value) {
    this._name = name;
    this._value = value;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
  toXML() {
    return "<mutation " + this.name + ' = "' + this.value + '"></mutation>';
  }
};
var Category = class {
  constructor(name, colour, nodes, custom, style, cssClass, toolboxItemId, hidden) {
    this._name = name;
    this._nodes = nodes ? nodes : [];
    this._colour = colour;
    this._custom = custom;
    this._style = style;
    this._cssClass = cssClass;
    this._toolboxItemId = toolboxItemId ? toolboxItemId : import_angular2_uuid.UUID.UUID();
    this._hidden = hidden;
  }
  get nodes() {
    return this._nodes;
  }
  set nodes(nodes) {
    this._nodes = nodes;
  }
  get colour() {
    return this._colour;
  }
  set colour(value) {
    this._colour = value;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get custom() {
    return this._custom;
  }
  set custom(value) {
    this._custom = value;
  }
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
  }
  get cssClass() {
    return this._cssClass;
  }
  set cssClass(value) {
    this._cssClass = value;
  }
  get toolboxItemId() {
    return this._toolboxItemId;
  }
  set toolboxItemId(value) {
    this._toolboxItemId = value;
  }
  get hidden() {
    return this._hidden;
  }
  set hidden(value) {
    this._hidden = value;
  }
  toXML() {
    let xml = `<category expanded="false" name="${this.name}"`;
    if (this.toolboxItemId) {
      xml += ` toolboxitemid="${this.toolboxItemId}"`;
    }
    if (!this.style) {
      xml += ` colour="${this.colour}"`;
    } else {
      xml += ` categorystyle="${this.style}"`;
    }
    if (this.hidden) {
      xml += ' hidden="true"';
    }
    xml += this.cssClass ? ` categoryclass="${this.cssClass}"` : "";
    xml += this.custom ? ` custom="${this.custom}">` : ">";
    for (const element of this.nodes) {
      xml += element.toXML();
    }
    xml += "</category>";
    return xml;
  }
};
var LOGIC_CATEGORY = new Category("Logic", "%{BKY_LOGIC_HUE}", [new XmlBlock("controls_if"), new XmlBlock("logic_compare"), new XmlBlock("logic_operation"), new XmlBlock("logic_negate"), new XmlBlock("logic_boolean"), new XmlBlock("logic_null"), new XmlBlock("logic_ternary")]);
var LOOP_CATEGORY = new Category("Loops", "%{BKY_LOOPS_HUE}", [new XmlBlock("controls_repeat_ext"), new XmlBlock("controls_whileUntil"), new XmlBlock("controls_for"), new XmlBlock("controls_forEach"), new XmlBlock("controls_flow_statements")]);
var MATH_CATEGORY = new Category("Math", "%{BKY_MATH_HUE}", [new XmlBlock("math_number"), new XmlBlock("math_arithmetic"), new XmlBlock("math_single"), new XmlBlock("math_trig"), new XmlBlock("math_constant"), new XmlBlock("math_number_property"), new XmlBlock("math_round"), new XmlBlock("math_on_list"), new XmlBlock("math_modulo"), new XmlBlock("math_constrain"), new XmlBlock("math_random_int"), new XmlBlock("math_random_float"), new XmlBlock("math_atan2")]);
var TEXT_CATEGORY = new Category("Text", "%{BKY_TEXTS_HUE}", [new XmlBlock("text"), new XmlBlock("text_join"), new XmlBlock("text_append"), new XmlBlock("text_length"), new XmlBlock("text_count"), new XmlBlock("text_isEmpty"), new XmlBlock("text_indexOf"), new XmlBlock("text_charAt"), new XmlBlock("text_getSubstring"), new XmlBlock("text_changeCase"), new XmlBlock("text_multiline"), new XmlBlock("text_replace"), new XmlBlock("text_reverse"), new XmlBlock("text_trim"), new XmlBlock("text_print"), new XmlBlock("text_prompt"), new XmlBlock("text_prompt_ext")]);
var LISTS_CATEGORY = new Category("Lists", "%{BKY_LISTS_HUE}", [new XmlBlock("lists_create_with"), new XmlBlock("lists_create_empty"), new XmlBlock("lists_repeat"), new XmlBlock("lists_reverse"), new XmlBlock("lists_length"), new XmlBlock("lists_isEmpty"), new XmlBlock("lists_indexOf"), new XmlBlock("lists_getIndex"), new XmlBlock("lists_setIndex"), new XmlBlock("lists_getSublist"), new XmlBlock("lists_split"), new XmlBlock("lists_sort")]);
var COLOUR_CATEGORY = new Category("Colours", "%{BKY_COLOUR_HUE}", [new XmlBlock("colour_picker"), new XmlBlock("colour_random"), new XmlBlock("colour_rgb"), new XmlBlock("colour_blend")]);
var VARIABLES_CATEGORY = new Category("Variables", "%{BKY_VARIABLES_HUE}", [], "VARIABLE");
var FUNCTIONS_CATEGORY = new Category("Functions", "%{BKY_PROCEDURES_HUE}", [], "PROCEDURE");
var Button = class {
  constructor(text, callbackKey) {
    this.kind = "BUTTON";
    this._text = text;
    this._callbackKey = callbackKey;
  }
  get text() {
    return this._text;
  }
  set text(value) {
    this._text = value;
  }
  get callbackKey() {
    return this._callbackKey;
  }
  set callbackKey(value) {
    this._callbackKey = value;
  }
  toXML() {
    return `<button text="${this.text}" callbackKey="${this.callbackKey}"></button>`;
  }
};
var Label = class {
  constructor(text, _webClass) {
    this.kind = "LABEL";
    this._text = text;
    this._webClass = _webClass;
  }
  get text() {
    return this._text;
  }
  set text(value) {
    this._text = value;
  }
  get webClass() {
    return this._webClass;
  }
  set webClass(value) {
    this._webClass = value;
  }
  toXML() {
    return `<label text="${this.text}" web-class="${this.webClass}"></label>`;
  }
};
var Separator = class {
  constructor() {
    this.kind = "SEP";
  }
  toXML() {
    return "<sep></sep>";
  }
};
var Theme2 = class {
  constructor(name, blockStyles, categoryStyles, componentStyle) {
    this.name = name;
    this.blockStyles = blockStyles;
    this.categoryStyles = categoryStyles;
    this.componentStyle = componentStyle;
  }
  createBlocklyTheme() {
    return new Blockly.Theme(this.name, this.blockStyles, this.categoryStyles, this.componentStyle);
  }
};
var BlockStyle = class {
};
var BlockMutator = class {
  constructor(name, blockList = null) {
    this._name = name;
    this._blockList = blockList;
  }
  /**
   * @deprecated Use saveExtraState instead
   * https://developers.google.com/blockly/guides/create-custom-blocks/extensions#saveextrastate_and_loadextra
   */
  mutationToDom(block) {
  }
  /**
   * @deprecated Use loadExtraState instead
   * https://developers.google.com/blockly/guides/create-custom-blocks/extensions#saveextrastate_and_loadextrastate
   */
  domToMutation(block, xmlElement) {
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get blockList() {
    return this._blockList;
  }
  set blockList(value) {
    this._blockList = value;
  }
};
var NgxBlocklyToolbox = class extends Blockly.Toolbox {
  constructor(workspace) {
    super(workspace);
    this.SEARCH_CATEGORY = "SEARCH_CATEGORY";
    this.SEARCH_PLACEHOLDER = "SEARCH_PLACEHOLDER";
    this._SEARCHBAR_CLASS = "searchbar";
    this._TOOLBAR_CLASS = "toolbar";
    this._categoryId = import_angular2_uuid.UUID.UUID();
    this._categoryExpandedCache = /* @__PURE__ */ new Map();
    workspace.addChangeListener(this._onWorkspaceChange.bind(this));
  }
  init() {
    super.init();
    this._initSearchbar();
  }
  render(parsedToolboxDef) {
    if (parsedToolboxDef.contents.length === 0 || parsedToolboxDef.contents[0].toolboxitemid !== this._categoryId) {
      const name = Blockly.Msg[this.SEARCH_CATEGORY] ? Blockly.Msg[this.SEARCH_CATEGORY] : "Search";
      const xmlDef = '<xml><category colour="#ccc" expanded="false" name="' + name + '" hidden="true" toolboxitemid="' + this._categoryId + '"></category></xml>';
      const jsonDef = Blockly.utils.toolbox.convertToolboxDefToJson(xmlDef);
      parsedToolboxDef.contents = [jsonDef.contents[0]].concat(parsedToolboxDef.contents);
    }
    super.render(parsedToolboxDef);
    this._restoreExpandedState();
  }
  clearSearch() {
    this._clearSearchResult();
    if (this._input) {
      this._input.value = "";
    }
  }
  toXML() {
    let xml = '<xml id="toolbox" style="display: none">';
    if (this._nodes) {
      for (const node of this._nodes) {
        xml += node.toXML();
      }
    }
    xml += "</xml>";
    return xml;
  }
  get nodes() {
    return this._nodes;
  }
  set nodes(nodes) {
    this._nodes = nodes;
  }
  _initSearchbar() {
    this._input = document.createElement("input");
    this._input.placeholder = Blockly.Msg[this.SEARCH_PLACEHOLDER] ? Blockly.Msg[this.SEARCH_PLACEHOLDER] : "search";
    this._input.className = this._SEARCHBAR_CLASS;
    this._input.size = 1;
    this._input.addEventListener("keyup", this._search.bind(this));
    const element = this.HtmlDiv.firstChild;
    element.classList.add(this._TOOLBAR_CLASS);
    this.HtmlDiv.insertBefore(this._input, element);
  }
  _search(event) {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(() => {
      const searchKey = event.target.value.trim();
      if (searchKey.length > 0) {
        const result = this._recursiveSearch(searchKey, this.toolboxDef_);
        if (result.length > 0) {
          const category = this.getToolboxItemById(this._categoryId);
          category.updateFlyoutContents(result);
          category.show();
          this.setSelectedItem(category);
        } else {
          this._clearSearchResult();
        }
      } else {
        this._clearSearchResult();
      }
    }, 100);
  }
  _recursiveSearch(searchKey, child) {
    let blockDefs = [];
    if (child.contents && Array.isArray(child.contents)) {
      if (child.toolboxitemid && child.toolboxitemid === this._categoryId) {
        return blockDefs;
      }
      for (let i = 0; i < child.contents.length; i++) {
        if (typeof child.contents[i] === "object" && child.contents[i].kind) {
          if (child.contents[i].kind === "BLOCK" && child.contents[i].type) {
            const type = child.contents[i].type;
            if (this._compare(searchKey, type)) {
              blockDefs.push(child.contents[i]);
            } else {
              const workspace = new Blockly.Workspace();
              const searchBlock = workspace.newBlock(type);
              if (this._compare(searchKey, searchBlock.tooltip.toString())) {
                blockDefs.push(child.contents[i]);
              }
              workspace.dispose();
            }
          } else if (child.contents[i].kind === "CATEGORY") {
            const result = this._recursiveSearch(searchKey, child.contents[i]);
            blockDefs = [...blockDefs, ...result];
          }
        }
      }
    }
    return blockDefs;
  }
  _clearSearchResult() {
    const flyout = this.workspace_.getFlyout();
    if (flyout) {
      flyout.hide();
    }
    const category = this.getToolboxItemById(this._categoryId);
    if (category) {
      category.hide();
    }
  }
  _storeExpandedState() {
    this.getToolboxItems().forEach((item) => {
      if (item.getId() !== this._categoryId) {
        const collapsibleItem = item;
        if (typeof collapsibleItem.isExpanded === "function") {
          this._categoryExpandedCache.set(collapsibleItem.getId(), collapsibleItem.isExpanded());
        }
      }
    });
  }
  _restoreExpandedState() {
    this._categoryExpandedCache.forEach((expanded, id) => {
      const collapsibleItem = this.getToolboxItemById(id);
      if (collapsibleItem && typeof collapsibleItem.isExpanded === "function") {
        this._categoryExpandedCache.set(collapsibleItem.getId(), collapsibleItem.isExpanded());
      }
    });
  }
  _onWorkspaceChange(event) {
    if (event.type === Blockly.Events.TOOLBOX_ITEM_SELECT) {
      this._storeExpandedState();
    }
  }
  _compare(str1, str2) {
    if (typeof str1 === "string" && typeof str2 === "string") {
      str1 = this._prepareString(str1);
      str2 = this._prepareString(str2);
      if (str1.length > 0 && str2.length > 0) {
        const array1 = str1.split("_");
        const array2 = str2.split("_");
        for (let i1 = 0; i1 < array1.length; i1++) {
          for (let i2 = 0; i2 < array2.length; i2++) {
            if (array2[i2].startsWith(array1[i1])) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  _prepareString(str) {
    str = this._breakUpCamelCase(str);
    str = str.toLowerCase().trim();
    return this._replaceWhitespaceWithUnderscore(str);
  }
  _breakUpCamelCase(str) {
    return str.replace(/([A-Z])/g, " $1");
  }
  _replaceWhitespaceWithUnderscore(str) {
    return str.replace(/\s+/g, "_");
  }
};
var NgxBlocklyModule = class {
};
NgxBlocklyModule.ɵfac = function NgxBlocklyModule_Factory(t) {
  return new (t || NgxBlocklyModule)();
};
NgxBlocklyModule.ɵmod = ɵɵdefineNgModule({
  type: NgxBlocklyModule,
  declarations: [NgxBlocklyComponent],
  exports: [NgxBlocklyComponent]
});
NgxBlocklyModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxBlocklyModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxBlocklyComponent],
      imports: [],
      exports: [NgxBlocklyComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    }]
  }], null, null);
})();
Blockly.CollapsibleToolboxCategory.prototype.parseContents_ = function(categoryDef) {
  const contents = categoryDef["contents"];
  let prevIsFlyoutItem = true;
  if (categoryDef["custom"]) {
    this.flyoutItems_ = categoryDef["custom"];
  } else if (contents) {
    for (let i = 0, itemDef; itemDef = contents[i]; i++) {
      if (!Blockly.registry.hasItem(Blockly.registry.Type.TOOLBOX_ITEM, itemDef["kind"]) || itemDef["kind"].toLowerCase() === Blockly.ToolboxSeparator.registrationName && prevIsFlyoutItem) {
        const flyoutItem = itemDef;
        this.flyoutItems_.push(flyoutItem);
        prevIsFlyoutItem = true;
      } else {
        this.createToolboxItem_(itemDef);
        prevIsFlyoutItem = false;
      }
    }
  }
  if (categoryDef["categoryclass"]) {
    this.cssConfig_.row += " " + categoryDef["categoryclass"];
  }
};
Blockly.setLocale(EN);
export {
  Block,
  BlockMutator,
  BlockStyle,
  Blockly,
  Button,
  COLOUR_CATEGORY,
  Category,
  CustomBlock,
  FUNCTIONS_CATEGORY,
  Field,
  LISTS_CATEGORY,
  LOGIC_CATEGORY,
  LOOP_CATEGORY,
  Label,
  MATH_CATEGORY,
  Mutation,
  NgxBlocklyComponent,
  NgxBlocklyGenerator,
  NgxBlocklyGeneratorConfig,
  NgxBlocklyModule,
  NgxBlocklyToolbox,
  Separator,
  TEXT_CATEGORY,
  Theme2 as Theme,
  VARIABLES_CATEGORY,
  Value,
  XmlBlock
};
/*! Bundled license information:

blockly/dart.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

blockly/lua.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

blockly/php.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

blockly/python.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
//# sourceMappingURL=ngx-blockly.js.map
