<b>Syntax Parser:</b> A program that reads your code and determines what it does and if its grammar is valid.

<b>Lexical Environment:</b> Where something sits physically in the code you write. 'Lexical' means having to do with words or grammar. A lexical environment exists in programming languages in which where you write something is important.

-   "Where it's written and what surrounds it."

---

<h2><b>Execution Context:</b></h2> A wrapper to help manage the code that is running.

-   There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond what you've written in your code

<h3>Creation Phase</h3>
-   Global Object -- 'This' -- Outer Environment -- "Hoisting"

-   Hoisting: Variables are setup (and set equal to 'undefined') and functions are put in memory in their entirety

<h3>Execution Phase</h3>
-   Global Object -- 'This' -- Outer Environment -- Runs Your Code

---

<b>Name/Value Pair</b>: A name which maps to a unique value.

-   The name may be defined more than once, but can only have one value in any give context.
-   That value may be more name/value pairs.

<b>Object:</b> A collection of name/value pairs.

<code>
    {
        name: "value",
        address: "random-location",
    }
</code>

---

<b>Undefined:</b> a special value and keyword that variables receive during the creation phase.

---

<h3><b>Single Threaded, Synchronous Execution</b></h3>

<b>Single Threaded</b>: One command at a time.

<b>Synchronous</b>: One line at a time, in the order that it appears.

---

Scope: Where a variable is available in your code.
