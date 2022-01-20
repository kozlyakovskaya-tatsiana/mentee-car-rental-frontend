import * as React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'

import theme from '../../../Theme'
import { linkStyle } from '../../LoginPage/LoginForm/styles'

export const itemsList = (
    <div>
        <Link to="/admin/home" style={linkStyle}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon
                        style={{ fill: theme.palette.secondary.main }}
                    />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Link>
        <Link to="/admin/car" style={linkStyle}>
            <ListItem button>
                <ListItemIcon>
                    <ShoppingCartIcon
                        style={{ fill: theme.palette.text.primary }}
                    />
                </ListItemIcon>
                <ListItemText primary="Car Management" />
            </ListItem>
        </Link>
        <Link to="/admin/user" style={linkStyle}>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon style={{ fill: theme.palette.text.primary }} />
                </ListItemIcon>
                <ListItemText primary="User Management" />
            </ListItem>
        </Link>
        <Link to="/admin/reports" style={linkStyle}>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon
                        style={{ fill: theme.palette.text.primary }}
                    />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItem>
        </Link>
        <Link to="/admin/rp" style={linkStyle}>
            <ListItem button>
                <ListItemIcon>
                    <LayersIcon style={{ fill: theme.palette.text.primary }} />
                </ListItemIcon>
                <ListItemText primary="Rental Points" />
            </ListItem>
        </Link>
    </div>
)

export default itemsList
