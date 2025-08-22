document.getElementById('downloadPdf').addEventListener('click', () => {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      doc.text("Furniture Company - Suppliers Report", 14, 20);

      doc.autoTable({
        html: '#suppliersTable',
        startY: 30,
        styles: { fontSize: 8 },
        headStyles: { fillColor: [0, 119, 204] },
      });

      doc.save('Suppliers_Report.pdf');
    });

    document.getElementById('downloadExcel').addEventListener('click', () => {
      const table = document.getElementById('suppliersTable');

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.table_to_sheet(table);

      XLSX.utils.book_append_sheet(wb, ws, 'Suppliers');

      XLSX.writeFile(wb, 'Suppliers_Report.xlsx');
    })
    .
