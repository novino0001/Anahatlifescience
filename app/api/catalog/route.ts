import fs from 'fs/promises'
import path from 'path'
import * as XLSX from 'xlsx'

export async function GET() {
  try {
    // If a real Excel file has been dropped into `public/`, serve it directly
    const excelPath = path.join(process.cwd(), 'public', 'Anahat Product List.xlsx')
    try {
      const stat = await fs.stat(excelPath)
      if (stat && stat.isFile()) {
        const fileBuf = await fs.readFile(excelPath)
        return new Response(fileBuf, {
          status: 200,
          headers: {
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition': 'attachment; filename="Anahat Product List.xlsx"',
          },
        })
      }
    } catch (e) {
      // file doesn't exist — fall back to generating from JSON
    }

    const filePath = path.join(process.cwd(), 'public', 'product-catalog-demo.json')
    const jsonStr = await fs.readFile(filePath, 'utf8')
    const data = JSON.parse(jsonStr)
    const products = data?.products || []

    // Create worksheet from JSON
    const ws = XLSX.utils.json_to_sheet(products)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Products')

    // Write workbook to buffer
    const buf = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' })

    return new Response(buf, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="Anahat Product List.xlsx"',
      },
    })
  } catch (error) {
    console.error('Failed to generate catalog:', error)
    return new Response(JSON.stringify({ message: 'Failed to generate catalog' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
