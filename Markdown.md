# Guidelines

## Sections

##  Slides

- Titles  
  - Head title - `#` with `class: 'slide-title'`
  - Slide section title - `#` with class: `'slide-section'`
  - Basic title - `#` without a class
  - Sub title - `##` without a class

- Types of slides
  - ?
  - ?
  - ?

##  Images

##  Animations

##  Highlighting

- Code words/lines
  - Wrap the word/line with **\`\`**
  - Example: `int, double, string`, `Array.Sort(array)`
- Code blocks
  - Use **empty line before** and **after** the code block
  - Wrap the code block with **\`\`\`**
  - Select the proper language type - **cs, js, cpp, php, java**
  - Indent the code lines with a tab
  - Example

    ```cs
    public static void Main()
    {
        string example = "Example";
        Console.WriteLine(example);
    }
    ```

- Bold
  - Wrap text with `**`
  - **Example**
- Underline
  - Wrap text with `_`
  - _Example_
- Scratch
  - Wrap text with `~~`
  - ~~Example~~
- Bullets
  - Use `-` for bullet identifier at the start of the text line
    - Example

## Tables
- Separate with one empty line before and after the table definition
- Wrap cell data with `|`
- Separate table header with 3 `---` or more
- Example


  |Head 1    |Head 2    |
  |----------|----------|
  |Cell data |Cell data |
  |Cell data |Cell data |

##  Attributes

- `ids` for navigation
- `classes` for styling
- `style` for inline-styling
- `hasScriptWrapper=true` for parsing special characters
- `showInPresentation=true` for slides that must be displayed in the presentation
