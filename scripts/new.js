// This script to help you "start new" report

const { mkdirSync, writeFileSync, existsSync } = require('fs')
const { resolve, sep } = require('path')

const [_, __, title, version, description, author] = process.argv

if (process.argv.length < 5) {
  console.log()
  console.log('Error: Wrong format')
  console.log(
    'Usage: yarn new "<title>" "<version>" "<description>" "<github username">'
  )
  console.log()
  console.log(
    'e.g: yarn new "React" 19 "React is JavaScript Library" "faultable"'
  )
  console.log()
  process.exit(1)
}

const targetPath = resolve(__dirname, '..', 'pages', 'reports')

const slugify = text => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const createFile = _ => {
  if (existsSync(resolve(targetPath, fileFormat))) {
    console.log()
    console.log('> file exists. Consider to edit it?')
    console.log()
    process.exit(1)
  }

  try {
    writeFileSync(resolve(targetPath, fileFormat), template)
  } catch (err) {
    throw Error(err)
  }
}

const shouldAddZero = number => number <= 9 && '0'

const date = new Date()
const currentDate = date.getDate()
const $date = shouldAddZero(currentDate) + currentDate
const $month = months[date.getMonth() + 1]
const $year = date.getFullYear()

const dateFormat = `${$month} ${$date}, ${$year}`
const footerDateFormat = `${$date} ${$month} ${$year}`
const fileFormat = `${slugify(title)}-${version}.mdx`
const template = `import Meta from '../../components/Meta'

export const meta = {
  title: '${title} v${version} report by evilfactorylabs RNDC',
  isPublished: false,
  published: '${dateFormat}',
  description: '${description}'
}

export default ({ children }) => <Meta meta={meta}>{children}</Meta>

# ${title}

${description}

### Latar Belakang

#### Sejarah Singkat

...

#### Masalah yang dipecahkan

- 

### Key Concepts

- 

### Core Features

- 

### Under The Hood (Key Concepts)

...

### Core Features

...

### Stats

#### Kompleksitas

...

#### Adopsi

...

#### Alternatif

...

### Referensi

- 

---

Diterbitkan pada ${footerDateFormat} oleh [${author}](https://github.com/${author}).
`

createFile()

console.log()
console.log('> Created here: ' + resolve(targetPath, fileFormat))
console.log()
