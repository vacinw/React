import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import {
    HomeIcon,
    UserGroupIcon,
    DiscoverIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    DiscoverActiveIcon,
    LiveActiveIcon
} from '~/components/Icons'

import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import SuggestedAccounts from "~/components/SuggestedAccounts/SuggestedAccounts";

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu >
                <MenuItem
                    title="For you"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                >
                </MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                >
                </MenuItem>
                <MenuItem
                    title="Discovery"
                    to={config.routes.discovery}
                    icon={<DiscoverIcon />}
                    activeIcon={<DiscoverActiveIcon />}
                >
                </MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                >
                </MenuItem>
            </Menu>

            <SuggestedAccounts label='Suggested accounts' />
            <SuggestedAccounts label='Following accounts' />
        </aside>
    );
}

export default Sidebar;