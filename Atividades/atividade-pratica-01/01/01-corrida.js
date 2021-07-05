const competitors = []

function Competitor(start, name, time) {
    this.start = start
    this.name = name
    this.time = time
}

function addCompetitor(competitor) {
    competitors.push(competitor)

    document.frmAddCompetitor.start.value = ''
    document.frmAddCompetitor.name.value = ''
    document.frmAddCompetitor.time.value = ''
}

function insertCompetitor() {
    const start = document.frmAddCompetitor.start.value
    const name = document.frmAddCompetitor.name.value
    const time = document.frmAddCompetitor.time.value

    const competitor = new Competitor(start, name, time)

    competitors.length < 6 ? addCompetitor(competitor) : window.alert('Não é possível adicionar mais competidores')

    document.getElementById('competitorsLength').innerHTML = `Total: ${competitors.length}`

    document.getElementById('tableBody').innerHTML = competitors.map((competitor) => {
        return `<tr>
                    <td>${competitor.start}</td>
                    <td>${competitor.name}</td>
                    <td>${competitor.time}</td>
                </tr>`
    }).join('')

    competitors.length === 6 ? showResults() : ''
}

function showResults() {
    const orderCompetitorsByTime = competitors.sort((competitor, nextCompetitor) => competitor.time > nextCompetitor.time
        ? 1
        : nextCompetitor.time > competitor.time
            ? -1
            : 0);

    for (let index = 0; index < competitors.length; index++) {
        competitors[0].time === competitors[index].time ? competitors[index] = {
            ...competitors[index],
            result: 'Vencedor(a)'
        } : competitors[index] = {
            ...competitors[index],
            result: '-'
        }
    }

    document.getElementById('tableBodyResults').innerHTML = orderCompetitorsByTime.map((competitor) => {
        return `<tr>
                    <td>${competitor.start}</td>
                    <td>${competitor.name}</td>
                    <td>${competitor.time}</td>
                    <td>${competitor.result}</td>
                </tr>`
    }).join('')
}