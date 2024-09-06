// src/pages/Approvals.js
import React, { useState } from 'react';
import { Container, Paper, Typography, Grid, Button } from '@mui/material';

const Approvals = () => {
  const [approvals, setApprovals] = useState([
    {
      id: 1,
      taskName: 'Tarefa 1',
      status: 'Aguardando Aprovação',
      approvers: [
        { userId: 1, name: 'Usuário 1', approved: false },
        { userId: 2, name: 'Usuário 2', approved: false }
      ]
    }
  ]);

  const handleApprove = (approvalId, approverId) => {
    const updatedApprovals = approvals.map((approval) => {
      if (approval.id === approvalId) {
        return {
          ...approval,
          approvers: approval.approvers.map((approver) => {
            if (approver.userId === approverId) {
              return { ...approver, approved: true };
            }
            return approver;
          })
        };
      }
      return approval;
    });

    setApprovals(updatedApprovals);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Paper elevation={6} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Aprovações
        </Typography>

        <Grid container spacing={2}>
          {approvals.map((approval) => (
            <Grid item xs={12} key={approval.id}>
              <Paper elevation={3} style={{ padding: '15px' }}>
                <Typography variant="h6">{approval.taskName}</Typography>
                <Typography>Status: {approval.status}</Typography>

                <Typography variant="body2" style={{ marginTop: '10px' }}>
                  Aprovadores:
                </Typography>
                {approval.approvers.map((approver) => (
                  <div key={approver.userId} style={{ marginLeft: '15px' }}>
                    <Typography variant="body2">
                      {approver.name} - {approver.approved ? 'Aprovado' : 'Pendente'}
                    </Typography>
                    {!approver.approved && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleApprove(approval.id, approver.userId)}
                        style={{ marginTop: '10px' }}
                      >
                        Aprovar
                      </Button>
                    )}
                  </div>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Approvals;
