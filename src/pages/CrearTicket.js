import React, { useContext, useState } from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';


const { Title, Text } = Typography;

export const CrearTicket = () => {

    useHideMenu(true);

    const { socket } = useContext(SocketContext);

    const [ticket, setTicket] = useState(null);

    const nuevoTicket = () => {

        socket.emit('solicitar-ticket', null, (ticket) => {
            console.log(ticket);
            setTicket(ticket);
        });

    }

    return (
        <>
            <Row>
                <Col span={14} offset={6} align="center">
                    <Title level={3}>
                        Presione el botón para un nuevo ticket
                    </Title>

                    <Button
                        shape="round"
                        type="primary"
                        onClick={nuevoTicket}
                        icon={<DownloadOutlined />}
                        size="large"
                    >
                        Nuevo Ticket
                    </Button>
                </Col>
            </Row>

            {
                ticket && (
                    <Row style={{marginTop: 100}}>
                        <Col span={14} offset={6} align="center">
                            <Text level={2}>
                                Su número
                            </Text>
                            <br />
                            <Text type="success" style={{fontSize: 55}}>
                                {ticket.number}
                            </Text>
                        </Col>
                    </Row>
                )
            }

        </>
    )
}
