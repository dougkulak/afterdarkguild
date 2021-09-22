import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import {encounterAbbrevs, encounters} from '../config/config';
import {CheckBox} from '@mui/icons-material';

function Attended(props) {
  return <CheckBox color={'primary'} {...props} />;
}

function NotAttended(props) {
  return <span style={{color: '#333'}}>&mdash;</span>;
}

export function AttendanceTable({player, allRuns, attendedRuns}) {
  let weeks = [];

  let highestWeek = 0;

  allRuns.forEach((x) => {
    if (x.week > highestWeek) highestWeek = x.week;
  });

  let numKaraAttends = 0;
  let numGruulAttends = 0;
  let numMagtheridonAttends = 0;
  let numSscAttends = 0;
  let numTkAttends = 0;

  for (let i = 1; i <= highestWeek; i++) {
    let week = {};

    week.num = i;

    week.attendedKarazhanRuns = attendedRuns.filter(
      (x) =>
        x.encounter === encounters.KARAZHAN &&
        x.week === week.num &&
        x.attendees.includes(player.name)
    );
    week.attendedGruulRuns = attendedRuns.filter(
      (x) =>
        x.encounter === encounters.GRUUL &&
        x.week === week.num &&
        x.attendees.includes(player.name)
    );
    week.attendedMagtheridonRuns = attendedRuns.filter(
      (x) =>
        x.encounter === encounters.MAGTHERIDON &&
        x.week === week.num &&
        x.attendees.includes(player.name)
    );
    week.attendedSscRuns = attendedRuns.filter(
      (x) =>
        x.encounter === encounters.SSC &&
        x.week === week.num &&
        x.attendees.includes(player.name)
    );
    week.attendedTkRuns = attendedRuns.filter(
      (x) =>
        x.encounter === encounters.TK &&
        x.week === week.num &&
        x.attendees.includes(player.name)
    );

    week.attendedKarazhan =
      week.attendedKarazhanRuns.length > 0 ? <Attended /> : <NotAttended />;
    week.attendedGruul =
      week.attendedGruulRuns.length > 0 ? <Attended /> : <NotAttended />;
    week.attendedMagtheridon =
      week.attendedMagtheridonRuns.length > 0 ? <Attended /> : <NotAttended />;
    week.attendedSsc =
      week.attendedSscRuns.length > 0 ? <Attended /> : <NotAttended />;
    week.attendedTk =
      week.attendedTkRuns.length > 0 ? <Attended /> : <NotAttended />;

    if (week.attendedKarazhanRuns.length > 0) numKaraAttends++;
    if (week.attendedGruulRuns.length > 0) numGruulAttends++;
    if (week.attendedMagtheridon.length > 0) numMagtheridonAttends++;
    if (week.attendedSscRuns.length > 0) numSscAttends++;
    if (week.attendedTkRuns.length > 0) numTkAttends++;

    weeks.push(week);
  }

  const attendanceRateKara = numKaraAttends / highestWeek;
  const attendanceRateGruul = numGruulAttends / highestWeek;
  const attendanceRateMag = numMagtheridonAttends / highestWeek;
  const attendanceRateSsc = numSscAttends / highestWeek;
  const attendanceRateTk = numTkAttends / highestWeek;

  const formatPct = (val) => `${val * 100}%`;

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align={'center'}>Week</TableCell>
              <TableCell align={'center'}>
                {encounterAbbrevs.KARAZHAN}
              </TableCell>
              <TableCell align={'center'}>{encounterAbbrevs.GRUUL}</TableCell>
              <TableCell align={'center'}>
                {encounterAbbrevs.MAGTHERIDON}
              </TableCell>
              <TableCell align={'center'}>{encounterAbbrevs.SSC}</TableCell>
              <TableCell align={'center'}>{encounterAbbrevs.TK}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {weeks.map((week, i) => (
              <TableRow key={i}>
                <TableCell align={'center'}>{week.num}</TableCell>
                <TableCell align={'center'}>{week.attendedKarazhan}</TableCell>
                <TableCell align={'center'}>{week.attendedGruul}</TableCell>
                <TableCell align={'center'}>
                  {week.attendedMagtheridon}
                </TableCell>
                <TableCell align={'center'}>{week.attendedSsc}</TableCell>
                <TableCell align={'center'}>{week.attendedTk}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell align={'center'}>Attendance Rate:</TableCell>
              <TableCell align={'center'}>
                <Typography variant={'h6'}>
                  {formatPct(attendanceRateKara)}
                </Typography>
              </TableCell>
              <TableCell align={'center'}>
                <Typography variant={'h6'}>
                  {formatPct(attendanceRateGruul)}
                </Typography>
              </TableCell>
              <TableCell align={'center'}>
                <Typography variant={'h6'}>
                  {formatPct(attendanceRateMag)}
                </Typography>
              </TableCell>
              <TableCell align={'center'}>
                <Typography variant={'h6'}>
                  {formatPct(attendanceRateSsc)}
                </Typography>
              </TableCell>
              <TableCell align={'center'}>
                <Typography variant={'h6'}>
                  {formatPct(attendanceRateTk)}
                </Typography>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
